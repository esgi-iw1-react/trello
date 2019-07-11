import React, {useState} from 'react'

const Header = () => {
  
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  
  return <header className="flex items-center justify-center mx-auto w-1/2">
    <p className="text-center font-bold text-3xl text-blue-600 py-4">Mini trello !</p>
    <p className="flex items-center ml-3">
      <p className="rounded-full mr-3 bg-gray-300 h-8 w-8 flex justify-center items-center font-bold">{user.username.charAt(0).toUpperCase()}</p>
      <p>{user.username}</p>
    </p>
  </header>
};

export default Header;