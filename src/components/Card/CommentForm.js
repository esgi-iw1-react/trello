import React from 'react'

class CommentForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { text: 'allo ' }
  }
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      text: value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text, this.props.card);
    this.setState({text: ""});
  };
  
  render() {
    return <form onSubmit={this.handleSubmit}>
      <textarea className="w-full p-2 h-32" name="comment" placeholder="Ecrivez un commentaire" onChange={this.handleChange}>
      </textarea>
      <button className="text-white rounded bg-green-500 font-bold text-sm p-2 mt-2" type="submit">
        Enregistrer
      </button>
    </form>
  }
  
}

export default CommentForm;