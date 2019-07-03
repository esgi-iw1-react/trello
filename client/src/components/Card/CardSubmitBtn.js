import React from 'react'

const CardSubmitBtn = ({name = 'Enregistrer', bg = 'bg-green-500'}) => {
  return <button className={bg + " text-white rounded font-bold text-sm p-2 mt-2"} type="submit">
    {name}
  </button>
};

export default CardSubmitBtn