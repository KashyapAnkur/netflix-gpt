import React, { useEffect } from 'react';
import Login from "../components/Login";
import Browse from "../components/Browse";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        })
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;