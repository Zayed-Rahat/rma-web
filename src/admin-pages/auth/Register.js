import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Header from "../nav/Header";

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("ENV --->", process.env.REACT_APP_REGISTER_REDIRECT_URL);
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration.`
    );
    // save user email in local storage
    window.localStorage.setItem("emailForRegistration", email);
    // clear state
    setEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        autoFocus
      />

      <br />
      <button type="submit" className="btn btn-raised">
      <h4 style={{fontSize: 20 , color: "blue" }}>Register</h4>

      </button>
    </form>
  );

  return (

    <>
    <Header/>
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          
          {registerForm()}
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
