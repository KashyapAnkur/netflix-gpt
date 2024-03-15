import React, { useState } from 'react'
import { headerIcon } from '../utils/constants';
import UserDropdown from './UserDropdown';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleUserClick = () => {
    setUserMenu(!userMenu);
  };

  const UserDropdownObject = [
    {
      id: "dropdown1",
      name: "A",
      fun: () => {}
    },
    {
      id: "dropdown2",
      name: "B",
      fun: () => {}
    },
    {
      name: "Sign Out",
      fun: () => {
        signOut(auth)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            navigate("/error");
          });
      }
    }
  ];

  return (
    <div className="absolute w-full px-8 py-2 z-10 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"alt="logo" />
        {user &&
          <div className="flex">
            <img src={user?.photoURL} className="m-4 w-9 h-9 cursor-pointer" alt="userIcon"
              onClick={handleUserClick}
            />
            {userMenu &&
              <UserDropdown 
                UserDropdownObject={UserDropdownObject}

              />
            }
          </div>
        }
    </div>
  )
}

export default Header;