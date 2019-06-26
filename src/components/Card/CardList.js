import React from 'react'
import CardContainer from "./CardContainer";

class CardList extends React.Component {
  
  render() {
    return <>
      <div>
        {
          this.props.cards.map( (card, index) => <CardContainer key={index} card={card}/>)
        }
      </div>
    </>
  }
}

export default CardList