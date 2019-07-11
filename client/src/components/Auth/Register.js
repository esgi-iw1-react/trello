import React, {useContext, useState} from 'react';
import AuthHeader from "./AuthHeader";
import AuthFormWrap from "./AuthFormWrap";
import AuthFormInput from "./AuthFormInput";
import AuthSubmitButton from "./AuthSubmitButton";
import CardContext from "../../context/CardContext";

const Register = (props) => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const context = useContext(CardContext);
  
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.register(username, email, password)
    .then(res => {
      setUsername("");
      setEmail("");
      setPassword("");
      props.history.push("/login");
    })
    .catch(err => console.log(err))
  };
  
  
  return (
    <div className="w-full h-screen">
      <AuthHeader/>
      <AuthFormWrap>
        <form action="" onSubmit={handleSubmit} className="flex flex-col p-12 shadow">
          <p className="font-bold mb-10 text-3xl text-blue-800 text-center uppercase">Inscription</p>
          <AuthFormInput name="Nom d'utilisateur" placeholder="toto" type="text" onChange={onChangeUsername}/>
          <AuthFormInput name="Email" placeholder="test@test.com" type="email" onChange={onChangeEmail}/>
          <AuthFormInput name="Mot de passe" placeholder="*****" type="password" onChange={onChangePassword}/>
          <p className="font-semibold text-blue-500 mb-3">Se connecter</p>
          <AuthSubmitButton name="S'inscrire"/>
          {/*<p className="text-red-500 font-bold mt-4 text-lg">{error}</p>*/}
        </form>
      </AuthFormWrap>
    </div>
  )
};

export default Register;