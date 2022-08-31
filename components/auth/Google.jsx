import Link from "next/link";
import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { googleLogin } from "../../redux/admin/userSlice";
const Google = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    const result = response.profileObj;
    const token = response.tokenId;
    try {
      dispatch(googleLogin(result));
      console.log(response)
      router.push("/");
    } catch (error) {}
  };

  return (
    <>
      <GoogleLogin
        clientId="388199177066-o1jglvjrvnqvtiipadurfa24369q59ht.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </>
  );
};

export default Google;
