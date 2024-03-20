import React from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function UserDropdown() {
    const navigate = useNavigate();
    
    const UserDropdownObject = [
        {
          id: "dropdown1",
          name: "",
          fun: () => {}
        },
        {
          id: "dropdown2",
          name: "",
          fun: () => {}
        },
        {
          name: "Sign Out",
          fun: () => {
            signOut(auth)
              .then((res) => {})
              .catch((err) => {
                navigate("/error");
              });
          }
        }
    ];

    return (
        <>
            <ul className="user-profile-dropdown">
                {UserDropdownObject.map((li) => {
                    return (
                        <li key={li.id} onClick={li.fun}>{li.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserDropdown;