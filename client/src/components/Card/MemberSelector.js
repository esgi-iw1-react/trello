import React, {useContext, useEffect, useRef} from 'react';
import CardContext from "../../context/CardContext";
import UserItem from "../User/UserItem";


const MemberSelector = ({card, list}) => {
  const context = useContext(CardContext);
  const ref = useRef();
  
  useEffect(() => {
    context.fetchUsers();
    ref.current = true;
  }, []);
  
  if(context.users.length > 0){
    const userIds = card.users.map(user => user._id);
    const users = context.users.map(user => {
      user.selected = userIds.includes(user._id);
      return user;
    });
    // console.log(list);debugger;
    // console.log(userIds, users);debugger;
    
    return (
      <div className="p-4 bg-white shadow absolute top-auto right-0 z-10 w-56">
        <div className="flex flex-col w-full">
          {
            users.map( (user, index) => { return <UserItem key={index} user={user} card={card} list={list}/> })
          }
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
  
};

export default MemberSelector;