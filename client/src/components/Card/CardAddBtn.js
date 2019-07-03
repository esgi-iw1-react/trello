import React, { useState, useEffect } from 'react'

const CardAddBtn = (props) => {
  
  const [showDiv, setShowDiv] = useState(false);
  const [children, setChildren] = useState('');
  
  useEffect(() => {
    if(showDiv) {
      setChildren(props.children);
    } else {
      setChildren('');
    }
  }, [showDiv]);
  
  
  const handleClick = (e) => {
    e.preventDefault();
    setShowDiv(!showDiv);
  };
  
  return (
      <div className="relative">
        <button className="bg-gray-500 font-semibold p-2 rounded text-gray-900 text-sm w-32 mb-2"
                onClick={handleClick}>
                {props.name}
        </button>
        {children}
      </div>
  );
  
}

export default CardAddBtn