import React, { useState } from "react";
import Common_Form from "../../Forms/Common_Form";
import { LoginFormElements } from "../../config";

const Login = () => {
  const data = {
    email: "",
    password: "",
    username: "",
  };
  const [loginData, SetLoginData] = useState(data);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(loginData, "loginFormData");

    //api logic & database logic

    SetLoginData(data);
  }

  return (
    <div>
      Login
      <Common_Form
        formData={loginData}
        setFormData={SetLoginData}
        formControls={LoginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Login;
