import React from "react";
import FacebookLogin from "react-facebook-login";

const responseFacebook = (response) => {
  console.log(response);
};

const Login = () => {
  return (
    <div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        
        callback={responseFacebook}
      />
    </div>
  );
};

export default Login;
