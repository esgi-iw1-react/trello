import React, { useContext, useState } from 'react'
import CardContext from "../../context/CardContext";

const Login = () => {
  
  const context = useContext(CardContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(email, password)
  };
  
  return <div className="w-full h-screen">
    <h1>Mini trello</h1>
    <form action="" onSubmit={handleSubmit}>
      <input type="email" placeholder="email" value="alextea2@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="password" value="toto" onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Se connecter</button>
    </form>
  </div>
  
};

export default Login