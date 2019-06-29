import React from 'react'
import Label from "../Label/Label";
import CardCommentForm from "./CardCommentForm";
import CardSubtitle from "./CardSubtitle";
import CardCommentItem from "./CardCommmentItem";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import CardAddBtn from "./CardAddBtn";
import LabelSelector from "../Label/LabelSelector";

class Card extends React.Component {
  
  render() {
    const {card, addComment} = this.props;
    return <>
      <div className="bg-gray-100 w-192 mx-auto mt-16 shadow p-10">
        <CardTitle title={card.title} card={card}/>
        <div className="flex">
          <div className="w-3/4">
            <div className="flex">
              <div className="flex flex-col justify-center mb-3 mr-6">
                <p className="text-sm text-gray-700 mb-2">Membres</p>
                <img src="../../../public/images/pikachu.jpeg" alt="" className="w-8 h-8"/>
              </div>
              <div className="block">
                <p className="text-sm text-gray-700 mb-2">Etiquettes</p>
                <div className="flex justify-around">
                  {
                    card.labels.map((label, index) => <Label key={index} name={label.name} color={label.color} />)
                  }
                </div>
              </div>
            </div>
            <div className="mb-4">
              <CardSubtitle name="Descriptions"/>
              <CardDescription description={card.description} card={card} />
            </div>
            <div>
              <CardSubtitle name="Ajouter un commentaire"/>
              <CardCommentForm onSubmit={addComment} card={card}/>
            </div>
            <div className="mt-4">
              <CardSubtitle name="Commentaires"/>
              <ul>
                { this.props.card.comments.map((comment, index) => <CardCommentItem key={index} name={comment}/>) }
              </ul>
            </div>
          </div>
          <div className="w-1/4 flex flex-col items-end">
            <CardAddBtn card={card} name="Membres"/>
            <CardAddBtn card={card} name="Labels"><LabelSelector card={card}/></CardAddBtn>
            <CardAddBtn card={card} name="CheckList"/>
            {/*<CardAddBtn click={addLabel} card={card} name="Date Limite"/>*/}
          </div>
        </div>
      </div>
    </>
  }
}

export default Card;