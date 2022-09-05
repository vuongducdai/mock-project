// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";
import httpProxy from "http-proxy";

import { useRouter } from "next/router";

const TARGET_URL = "https://ecommercevoyager.herokuapp.com/";

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
  console.log("In API Login");
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  return new Promise((resolve) => {
    // Step 2: remove cookie from header
    // don't send cookies to API server
    req.headers.cookie = "";

    req.url = "api/auth/login";

    proxy.web(req, res, {
      target: TARGET_URL,
      // both has the same path api/students so just need to edit origin
      changeOrigin: true,
      // in login case, we want to handle the response.
      selfHandleResponse: false,
    });

    proxy.once("proxyRes", () => {
      resolve(true);
    });

    //res.status(200).json({ name: 'Math all post here' })
  });
}
