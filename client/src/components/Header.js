import React, {useState} from 'react'
import UserAvatar from "./User/UserAvatar";

const Header = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  return <header className="flex items-center justify-center mx-auto w-1/2">
    <p className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</p>
    <div className="flex items-center ml-3">
      <UserAvatar username={user.username.charAt(0).toUpperCase()}/>
      <p>{user.username}</p>
    </div>
  </header>
};

export default Header;