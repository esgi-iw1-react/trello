import React, { useContext, useState } from 'react'
import CardContext from "../../context/CardContext";

const Login = (props) => {
  
  const context = useContext(CardContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(email, password)
      .then(() => props.history.push("/"))
      .catch(err => setError('Mauvais login/mot de passe'))
  };
  
  return <div className="w-full h-screen">
    <h1>Mini trello</h1>
    <form action="" onSubmit={handleSubmit}>
      <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Se connecter</button>
    </form>
    <p className="text-red-500 font-bold">{error}</p>
  </div>
  
};

export default Login