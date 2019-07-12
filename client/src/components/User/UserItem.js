import React, {useState, useContext} from 'react';
import UserAvatar from "./UserAvatar";
import CardContext from "../../context/CardContext";

const UserItem = ({user, card, list}) => {
  
  const context = useContext(CardContext);
  const [selected, setSelected] = useState(user.selected);
  
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(!selected);
    if(!selected){
      context.cardAddUser(user, card, list)
    } else {
      context.cardRemoveUser(user, card, list)
    }
  };
  
  return (
    <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
      <div className="flex items-center p-3">
        <UserAvatar username={user.username.charAt(0).toUpperCase()}/>
        <p>{user.username}</p>
      </div>
      {selected ? <svg xmlns="http://www.w3.org/2000/svg" fill="#3182ce" height="20" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg> : ''}
    </div>
  );
};

export default UserItem;