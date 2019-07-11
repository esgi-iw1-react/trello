import React from 'react';

const AuthFormInput = ({name, placeholder = '', type = 'text', onChange }) => {
    return <div className="mb-4 flex flex-col">
        <label className="mb-2 text-blue-500 font-semibold text-xl">{name}</label>
        <input className="bg-gray-100 p-3 rounded text-xl text-gray-900" type={type} placeholder={placeholder} onChange={onChange}/>
    </div>
};

export default AuthFormInput;