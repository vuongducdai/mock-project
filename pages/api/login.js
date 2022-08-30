// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import httpProxy from "http-proxy";

// Step 4: in case of you want to stream body, turn off bodyParser
// bodyParser is automatically enabled. If you want to consume the body
// as a Stream or with raw-body, you can set this to false.
export const config = {
  api: {
    bodyParser: false,
  },
};

//Step 1: Create Proxy Server
const proxy = httpProxy.createProxyServer();

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  return new Promise((resolve) => {
    // Step 2: remove cookie from header
    // don't send cookies to API server
    req.headers.cookie = "";

    const handleLoginResponse = (proxyRes, req, res) => {
      let body = "";
      //streaming data
      proxyRes.on("data", function (chunk) {
        body += chunk;
      });
      proxyRes.on("end", function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          // Convert accessToken to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });

          res.status(200).json({ message: "login sucessfully" });
        } catch (error) {
          res.status(500).json({ message: "Something went wrong" });
        }
        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    // Step 3: send request to proxy
    // /api/students
    // https://js-post-api.herokuapp.com/api/students
    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com/",
      // both has the same path api/students so just need to edit origin
      changeOrigin: true,
      // in login case, we want to handle the response.
      selfHandleResponse: true,
    });

    //res.status(200).json({ name: 'Math all post here' })
  });
}
