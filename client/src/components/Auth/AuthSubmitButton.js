import React from 'react';

const AuthSubmitButton = ({name}) => {
    return (
        <button type="submit" className="bg-blue-200 font-bold p-4 rounded text-blue-900 uppercase">{name}</button>
    )
};

export default AuthSubmitButton;