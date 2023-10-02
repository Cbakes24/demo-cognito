import React, { useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: "",
};

async function signUp(
  { username, password, email },
  updateFormType,
  setErrors
) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    console.log("sign up success!");
    updateFormType("confirmSignUp");
  } catch (err) {
    console.log("error signing up..", err);
    setErrors(err.message);
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType, setErrors) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType("signIn");
  } catch (err) {
    console.log("error signing up..", err);
    setErrors(err.message);
  }
}

async function signIn({ username, password }, setUser, setErrors) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    console.log(userInfo, "USER INFOOOO");
    setUser(userInfo);
    console.log(user, "THE USER");
  } catch (err) {
    console.log("error signing up..", err);
    setErrors(err.message);
    // return <p>error signing in {err}</p>
  }
}

async function forgotPassword({ username }, updateFormType, setErrors) {
  try {
    await Auth.forgotPassword(username);
    updateFormType("forgotPasswordSubmit");
  } catch (err) {
    console.log("error submitting username to reset password...", err);
    setErrors(err.message);
  }
}

async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType, setErrors
) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password, setErrors);
    updateFormType("signIn");
  } catch (err) {
    console.log("error updating password... :", err);
    setErrors(err.message);
  }
}
function Form(props) {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFormState] = useState(initialFormState);
  const [errors, setErrors] = useState(null);
  

  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    updateFormState(newFormState);
  }

  function renderForm() {
    switch (formType) {
      case "signUp":
        return (
          <div>
            <p>{errors}</p>
            <SignUp
              signUp={() => signUp(formState, updateFormType, setErrors)}
              updateFormState={(e) => updateForm(e)}
            />
          </div>
        );
      case "confirmSignUp":
        return (
          <div>
            <p>{errors}</p>
            <ConfirmSignUp
              confirmSignUp={() => confirmSignUp(formState, updateFormType, setErrors)}
              updateFormState={(e) => updateForm(e)}
            />
          </div>
        );
      case "signIn":
        return (
          <div>
            <p>{errors}</p>
            <SignIn
              signIn={() => signIn(formState, props.setUser, setErrors)}
              updateFormState={(e) => updateForm(e)}
            />
          </div>
        );
      case "forgotPassword":
        return (
          <div>
            <p>{errors}</p>
            <ForgotPassword
              forgotPassword={() => forgotPassword(formState, updateFormType, setErrors)}
              updateFormState={(e) => updateForm(e)}
            />
          </div>
        );
      case "forgotPasswordSubmit":
        return (
   
          <ForgotPasswordSubmit
            forgotPasswordSubmit={() =>
              forgotPasswordSubmit(formState, updateFormType, setErrors)
            }
            updateFormState={(e) => updateForm(e)}
          />
        );
      default:
        return <div>{/* Rest of your JSX */}</div>;
    }
  }

  return (
    <div>
      {renderForm()}
      {formType === "signUp" && (
        <p>
          Already have an account?{" "}
          <span onClick={() => updateFormType("signIn")}>Sign In</span>
        </p>
      )}
      {formType === "signIn" && (
        <>
          <p className="text-red-300">
            Need an account?{" "}
            <span
              className="text-purple-500 cursor-pointer"
              onClick={() => updateFormType("signUp")}
            >
              Sign Up
            </span>
          </p>
          <p>
            Forget your password?{" "}
            <span
              className="p-4"
              onClick={() => updateFormType("forgotPassword")}
            >
              Reset Password
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Form;
