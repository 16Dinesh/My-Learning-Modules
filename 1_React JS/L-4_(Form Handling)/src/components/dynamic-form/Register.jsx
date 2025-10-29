import React, { useState } from "react";
import Common_Form from "../../Forms/Common_Form";
import { registerFormElements } from "../../config";

const Register = () => {
  const data = {
    username: "",
    email: "",
    password: "",
  };

  const [register, SetRegister] = useState(data);

  function onHandleSubmit(event) {
    event.preventDefault();
    console.log(register, "registerFormData");
    SetRegister(data);
  }

  return (
    <div>
      Register
      <Common_Form 
      formData={register}
      setFormData={SetRegister}
      formControls={registerFormElements}
      buttonText={'Register'}
      onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default Register;
