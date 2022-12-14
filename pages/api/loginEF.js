// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import httpProxy from "http-proxy";

import { useRouter } from "next/router";

const TARGET_URL = "https://js-post-api.herokuapp.com/";

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
    return res.status(404).json({ message: "method not supported a" });
  }

  return new Promise((resolve) => {
    // Step 2: remove cookie from header
    // don't send cookies to API server
    req.headers.cookie = "";

    const handleLoginResponse = (proxyRes, req, res) => {
      let body = "";

      proxy.on("proxyRes", function (proxyRes, req, res) {
        var body = [];
        proxyRes.on("data", function (chunk) {
          body.push(chunk);
        });
        proxyRes.on("end", function () {
          body = Buffer.concat(body).toString();
          console.log("res from proxied server:", body);
          res.end("my response to cli");
        });
      });
    };

    proxy.web(req, res, {
      target: TARGET_URL,
      // both has the same path api/students so just need to edit origin
      changeOrigin: true,
      // in login case, we want to handle the response.
      selfHandleResponse: true,
    });

    proxy.once("proxyRes", handleLoginResponse);

    //res.status(200).json({ name: 'Math all post here' })
  });
}
