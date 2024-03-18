import React, { useEffect, useState } from 'react'
import UserDropdown from './UserDropdown';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { headerLogo } from '../utils/constants';

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

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
          .then((res) => {})
          .catch((err) => {
            navigate("/error");
          });
      }
    }
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ 
                uid: uid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL
            }));
            navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    })

    return () => unsubscribe();
}, []);

  return (
    <div className="absolute w-full px-8 py-2 z-10 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-40" src={headerLogo} alt="logo" />
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