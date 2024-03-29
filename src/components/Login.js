import React, { useRef, useState } from 'react';
import Header from './Header'
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGIN_BACKGROUND, userAvatar } from '../utils/constants';
import Loader from './Loader';
import { setLoader } from "../utils/configSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { loader }  = useSelector(store => store.config);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSigninForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    dispatch(setLoader());
    const message = checkValidData(name?.current?.value, email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(isSignInForm) {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "", photoURL: userAvatar
        })
          .then(() => {
            dispatch(setLoader());
          })
          .catch((error) => {
            setErrorMessage(error);
          });
      })
      .catch((error) => {
        console.log(error)
        const errorCode = error.code;
        const errorMsg = error.message;
        setErrorMessage(errorMsg.includes('invalid-credential') ? 'Invalid Credential' : errorMsg);
      });
    } else {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: userAvatar
          })
            .then(() => {
              const { displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ 
                  displayName: displayName, 
                  photoURL: photoURL
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMsg = error.message;
          setErrorMessage(errorCode + "-" + errorMsg);
        });
    }
  };

  return (
    <div>
        <Header />
        <div className="absolute">
          <img 
            className="h-screen object-cover"
            src={LOGIN_BACKGROUND}
            alt="background"
          />
        </div>
        
        <form onSubmit={(e) => e.preventDefault()}className="w-full md:w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
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
            {isSignInForm ? (
                loader ? <Loader /> : "Sign In"
            ) : (
              <>
                "Sign Up"
              </>
            )}
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