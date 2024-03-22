import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

function UserDropdown() {
  const navigate = useNavigate();
  
  const UserDropdownObject = [
    {
      id: "dropdown1",
      name: "Hello",
      fun: () => {}
    },
    {
      id: "dropdown2",
      name: "Hello",
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
      <ul className="user-profile-dropdown md:mt-10 mt-28">
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