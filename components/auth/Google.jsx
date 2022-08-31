import React from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

import { useDispatch, useSelector } from "react-redux";
import {googleLogin} from '../../redux/admin/userSlice'
const Google = () => {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    const result = response.profileObj;
    const token = response.tokenId;
    try {
      
      dispatch(googleLogin(result,token))
      console.log(user)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="388199177066-o1jglvjrvnqvtiipadurfa24369q59ht.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Google;
