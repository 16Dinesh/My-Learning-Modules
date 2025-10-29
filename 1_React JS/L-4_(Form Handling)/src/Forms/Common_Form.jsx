import React from "react";
import CommonInput from "../components/Common-Properties/Input";

const Common_Form = ({
  formControls = [],
  onHandleSubmit,
  formData,
  setFormData,
  buttonText,
}) => {
  function renderFormElements(getCurrentElement) {
    let content = null;

    // console.log(getCurrentElement.id);    

    const formTypes = {
      INPUT: "input",
      SELECT: "select",
      RADIO: "radio",
      CHECKBOX: "checkbox",
      BUTTON: "button",
      TEXTAREA: "textarea",
    };

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput key={getCurrentElement.id}
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            type={getCurrentElement.type}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  }

  return (
    <form onSubmit={onHandleSubmit}>
      {formControls?.length
        ? formControls.map((singleFormElementItem) =>
            renderFormElements(singleFormElementItem)
          )
        : null}
      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
};

export default Common_Form;
