// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cookies from "cookies";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({ message: "method not supported" });
  }

  const cookies = new Cookies(req, res);
  //Remove access token, set method with no value will automatically remove access token
  cookies.set("access_token");

  res.status(200).json({ message: "logout successfully" });
}
