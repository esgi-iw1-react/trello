import React from 'react'
import CardSubmitBtn from "./CardSubmitBtn";

class CommentForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { text: '' }
  }
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      text: value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSubmit(this.state.text, this.props.card);
  };
  
  render() {
    return <form onSubmit={this.handleSubmit}>
      <textarea className="w-full p-2 h-32" name="comment"
                placeholder="Ecrivez un commentaire"
                onChange={this.handleChange}
                value={this.state.text}>
      </textarea>
      <CardSubmitBtn/>
    </form>
  }
  
}

export default CommentForm;