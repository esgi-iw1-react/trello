import React from 'react'

class CardAddBtn extends React.Component {
  
  handleClick = (e) => {
    e.preventDefault();
    this.props.click({name: 'toto', color: 'bg-red-500'}, this.props.card)
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>+</button>
    );
  }
  
  
  
}

export default CardAddBtn