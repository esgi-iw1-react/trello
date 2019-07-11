import React from 'react';

const AuthFormWrap = (props) => {
  return <div className="flex items-center justify-center h-screen w-full">
    {props.children}
  </div>
  
};

export default AuthFormWrap;