import React from "react";
import FacebookLogin from "react-facebook-login";


const Facebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  
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

export default Facebook;
