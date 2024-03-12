import React, { useRef, useState } from 'react';
import Header from './Header'
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(name?.current?.value, email.current.value, password.current.value);
    setErrorMessage(message);

    // Sign In / Sign Up
  };

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}className="w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
          {!isSignInForm && (
            <input type="text" ref={name} placeholder="Full Name" className="bg-gray-700 p-2 py-3 my-2 w-full" />
          )}
          <input type="text" ref={email} placeholder="Email Address" className="bg-gray-700 p-2 py-3 my-2 w-full" />
          <input type="password" ref={password} placeholder="Password" className="bg-gray-700 p-2 py-3 my-2 w-full" />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button 
            className="p-2 my-4 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            { isSignInForm ? "Sign In" : "Sign Up" }
          </button>
          <p className="py-4 font-thin text-xs cursor-pointer"
            onClick={toggleSigninForm}
          >
            { isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In" }
          </p>
        </form>
    </div>
  )
}

export default Login;