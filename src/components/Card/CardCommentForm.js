import React from 'react'
import CardSubmitBtn from "./CardSubmitBtn";

class CardCommentForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { text: '' }
  }
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({name: ""});
    this.props.onSubmit(this.state.name, this.props.card);
  };
  
  render() {
    return <form onSubmit={this.handleSubmit}>
      <textarea className="w-full p-2 h-32" name="comment"
                placeholder="Ecrivez un commentaire"
                onChange={this.handleChange}
                value={this.state.name}>
      </textarea>
      <CardSubmitBtn/>
    </form>
  }
  
}

export default CardCommentForm;