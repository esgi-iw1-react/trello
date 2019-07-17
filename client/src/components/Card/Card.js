import React from 'react'
import LabelSmall from "../Label/LabelSmall";
import CardCommentForm from "./CardCommentForm";
import CardSubtitle from "./CardSubtitle";
import CardCommentItem from "./CardCommmentItem";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import CardAddBtn from "./CardAddBtn";
import LabelSelector from "../Label/LabelSelector";
import {Link} from "react-router-dom";
import MemberSelector from "./MemberSelector";
import UserAvatar from "../User/UserAvatar";

const Card = ({ card, list }) => {
  
  
  return <>
    <div className="backdrop">
      <div className="modal">
        <div className="flex justify-between items-center mb-4">
          <CardTitle title={card.title} card={card} list={list}/>
          <Link to={"/app"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
          </Link>
        </div>
        <div className="flex">
          <div className="w-3/4">
            <div className="flex">
              <div className="flex flex-col justify-center mb-3 mr-6">
                <p className="text-sm text-gray-700 mb-2">Membres</p>
                <div className="flex justify-around">
                  {
                    card.users && card.users.map((user, index) => <UserAvatar key={index} username={user.username.charAt(0).toUpperCase()}/>)
                  }
                </div>
              </div>
              <div className="block">
                <p className="text-sm text-gray-700 mb-2">Labels</p>
                <div className="flex justify-around">
                  {
                    card.labels.map((label, index) => <LabelSmall key={index} name={label.name} color={label.color} />)
                  }
                </div>
              </div>
            </div>
            <div className="mb-4">
              <CardSubtitle name="Descriptions"/>
              <CardDescription description={card.description} card={card} list={list}/>
            </div>
            <div>
              <CardSubtitle name="Ajouter un commentaire"/>
              <CardCommentForm card={card} list={list}/>
            </div>
            <div className="mt-4">
              <CardSubtitle name="Commentaires"/>
              <ul>
                { card.comments.map((comment, index) => <CardCommentItem key={index} comment={comment}/>) }
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-end">
            <CardAddBtn name="Membres"><MemberSelector card={card} list={list}/></CardAddBtn>
            <CardAddBtn name="Labels"><LabelSelector card={card} list={list}/></CardAddBtn>
          </div>
        </div>
      </div>
    </div>
</>
};

export default Card;