import React, { useEffect, useState } from 'react'
import UserDropdown from './UserDropdown';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { SUPPORTED_LANGUAGES, headerLogo } from '../utils/constants';
import { clearGpt, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const [userMenu, setUserMenu] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const { showGptSearch } = useSelector(store => store.gpt);

  const handleUserClick = () => {
    setUserMenu(!userMenu);
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
    dispatch(clearGpt());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

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
    <div className="absolute w-full px-8 py-2 z-10 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between bg-black sm:bg-blue-900 md:bg-green-900">
        <img className="w-40 mx-auto md:mx-0" src={headerLogo} alt="logo" />
        {user &&
          <div className="flex p-2 justify-between">
            {showGptSearch &&
            <select onChange={handleLanguageChange} className="p-2 bg-gray-900 text-white">
              {SUPPORTED_LANGUAGES.map((lang) => 
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              )}
            </select>}
            <button
              onClick={handleGptSearch}
              className="px-4 m-2 bg-purple-800 text-white rounded-lg mx-4"
            >
              {showGptSearch ? "Homepage" : "GPT Search"}</button>
            <img src={user?.photoURL} className="m-4 w-9 h-9 cursor-pointer" alt="userIcon"
              onClick={handleUserClick}
            />
            {userMenu && <UserDropdown />}
          </div>
        }
    </div>
  )
}

export default Header;