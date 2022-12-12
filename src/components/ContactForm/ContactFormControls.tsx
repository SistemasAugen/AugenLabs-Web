import { useState } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";
import { toast } from "react-toastify";

const PostContactForm = async (
  values: any,
  successCallback: any,
  errorCallback: any
) => {
  // do stuff
  // if successful
  if (true) successCallback();
  else errorCallback();
};

const initialFormValues = {
  user_name: "",
  user_email: "",
  user_message: "",
  formSubmitted: false,
  success: false
};

if (typeof window !== "undefined") {
  injectStyle();
};

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({} as any);

  const validate: any = (fieldValues = values) => {
    let temp: any = { ...errors };

    if ("user_name" in fieldValues)
      temp.user_name = fieldValues.user_name ? "" : "Ingrese un nombre.";

    if ("user_email" in fieldValues) {
      temp.user_email = fieldValues.user_email ? "" : "Ingrese un email.";
      if (fieldValues.user_email)
        temp.user_email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.user_email)
          ? ""
          : "Email no es valido.";
    }

    if ("user_message" in fieldValues)
      temp.user_message = 
      fieldValues.user_message.length >= 2
      && fieldValues.user_message.trim()!=="" 
      ? ""
      : "Ingrese un mensaje.";

    setErrors({
      ...temp
    });
  };

  const handleInputValue = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleSuccess = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: true
    });
  };

  const handleError = () => {
    setValues({
      ...initialFormValues,
      formSubmitted: true,
      success: false
    });
  };

  const successToast = () => {
    toast.success('Muchas gracias, tu correo fue enviado correctamente!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.user_name &&
      fieldValues.user_email &&
      fieldValues.user_message &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((x) => x === "") && formIsValid();
    if (isValid) {
      await PostContactForm(values, handleSuccess, handleError);
    }
  };

  return {
    values,
    errors,
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    successToast
  };
};
