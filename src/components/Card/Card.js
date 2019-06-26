import React from 'react'
import Label from "../Label/Label";
import CommentForm from "./CommentForm";
import CardSubtitle from "./CardSubtitle";
import CardCommentItem from "./CardCommmentItem";
import CardDescription from "./CardDescription";

class Card extends React.Component {
  
  render() {
    const {card, addComment, editDescription} = this.props;
    return <>
      <div className="bg-gray-100 w-1/2 mx-auto mt-16 shadow p-6">
        <h1 className="font-bold text-gray-900 text-sm text-xl mb-3">{card.title}</h1>
        <div className="flex">
          <div className="flex flex-col justify-center mb-3 mr-6">
            <p className="text-sm text-gray-700 mb-2">Membres</p>
            <img src="../../../public/images/pikachu.jpeg" alt="" className="w-8 h-8"/>
          </div>
          <div className="block">
            <p className="text-sm text-gray-700 mb-2">Etiquettes</p>
            <div className="flex justify-around">
              {
                card.labels.map((label, index) => <Label key={index} text={label.name} color={label.color} />)
              }
            </div>
          </div>
        </div>
        <div className="mb-4">
          <CardSubtitle name="Descriptions"/>
          <CardDescription onSubmit={editDescription} description={card.description} card={card} />
        </div>
        <div>
          <CardSubtitle name="Ajouter un commentaire"/>
          <CommentForm onSubmit={addComment} card={card}/>
        </div>
        <div className="mt-4">
          <CardSubtitle name="Commentaires"/>
          <ul>
            { this.props.card.comments.map((comment, index) => <CardCommentItem key={index} name={comment}/>) }
          </ul>
        </div>
      </div>
    </>
  }
}

export default Card;