import React from 'react'

class CardDescription extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text : props.description
    }
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
    console.log(this.props.description);
    debugger;
    if(this.props.description !== ""){
      return <p className="py-1 text-gray-700 text-sm">{this.props.description}</p>
    } else {
      return <form onSubmit={this.handleSubmit}>
        <textarea className="w-full p-2 h-32" name="description" placeholder="Ajoutez une description" onChange={this.handleChange}>
        </textarea>
        <button className="text-white rounded bg-green-500 font-bold text-sm p-2 mt-2" type="submit">
          Enregistrer
        </button>
      </form>
    }
    
  }
  
  
}

export default CardDescription;