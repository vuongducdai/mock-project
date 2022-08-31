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
  return new Promise((resolve) => {
    // Additional Step for authorization site
    // Set cookies authorization
    const cookies = new Cookies(req, res);
    const access_token = cookies.get("access_token");
    if (access_token) {
      req.headers.Authorization = `Bearer ${access_token}`;
      console.log("successfully get access token");
    }

    // Step 2: remove cookie from header
    // don't send cookies to API server
    req.headers.cookie = "";

    // Step 3: send request to proxy
    // /api/students
    // https://js-post-api.herokuapp.com/api/students
    proxy.web(req, res, {
      target: "https://ecommercevoyager.herokuapp.com/",
      // both has the same path api/students so just need to edit origin
      changeOrigin: true,
      ignorePath: true,
      // proxy will handle the response, send directly to client
      // so we don't need res.status(200).json({ name: 'Math all post here' })
      selfHandleResponse: false,
    });

    //res.status(200).json({ name: 'Math all post here' })

    proxy.once("proxyRes", () => {
      resolve(true);
    });
  });
}
