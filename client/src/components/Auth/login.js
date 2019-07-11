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
    <h1 className="bg-blue-500 flex font-bold h-16 items-center justify-center text-2xl text-center text-white w-full">Mini trello</h1>
    <div className="flex items-center justify-center h-screen w-full">
      <form action="" onSubmit={handleSubmit} className="flex flex-col p-12 shadow">
        <p className="font-bold mb-10 text-3xl text-blue-800 text-center uppercase">Connexion</p>
        <div className="mb-4 flex flex-col">
          <label className="mb-2 text-blue-500 font-semibold text-xl">Email</label>
          <input className="bg-gray-100 p-3 rounded text-2xl text-gray-900" type="email" placeholder="toto@toto.com" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-4 flex flex-col">
          <label className="mb-2 text-blue-500 font-semibold text-xl">Mot de passe</label>
          <input className="bg-gray-100 mb-6 p-3 rounded text-2xl text-gray-900" type="password" placeholder="*****" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="bg-blue-200 font-bold p-4 rounded text-blue-900 uppercase">Se connecter</button>
        <p className="text-red-500 font-bold mt-4 text-lg">{error}</p>
      </form>
    </div>
  </div>
  
};

export default Login