import React, { useContext, useState } from 'react'
import CardContext from "../../context/CardContext";
import AuthHeader from "./AuthHeader";
import AuthFormWrap from "./AuthFormWrap";
import AuthFormInput from "./AuthFormInput";
import AuthSubmitButton from './AuthSubmitButton';
import { Link } from "react-router-dom";

const Login = (props) => {
  
  const context = useContext(CardContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(email, password)
      .then(() => props.history.push("/app"))
      .catch(err => setError('Mauvais login/mot de passe'))
  };
  
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  
  return <div className="w-full h-screen">
      <AuthHeader/>
      <AuthFormWrap>
        <form action="" onSubmit={handleSubmit} className="flex flex-col p-12 shadow">
          <p className="font-bold mb-10 text-3xl text-blue-800 text-center uppercase">Connexion</p>
          <AuthFormInput name="Email" placeholder="test@test.com" type="email" onChange={onChangeEmail}/>
          <AuthFormInput name="Mot de passe" placeholder="*****" type="password" onChange={onChangePassword}/>
          <Link className="font-semibold text-blue-500 mb-3" to="/register">S'inscrire</Link>
          <AuthSubmitButton name="Se connecter"/>
          <p className="text-red-500 font-bold mt-4 text-lg">{error}</p>
        </form>
      </AuthFormWrap>
  </div>
  
};

export default Login