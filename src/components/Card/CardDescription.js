import React from 'react'
import CardSubmitBtn from "./CardSubmitBtn";

class CardDescription extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text : props.description,
      edit : false
    }
  }
  
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      name: value
    });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      edit: false
    });
    this.props.onSubmit(this.state.name, this.props.card);
  };
  
  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  };
  
  render() {
    if(this.props.description !== "" && !this.state.edit){
      return <p className="py-1 text-gray-700 text-sm" onClick={this.toggleEdit}>{this.props.description}</p>
    } else {
      return <form onSubmit={this.handleSubmit}>
        <textarea className="w-full p-2 h-32"
                  placeholder="Ajoutez une description"
                  onChange={this.handleChange}
                  value={this.state.name}
        >
        </textarea>
        <CardSubmitBtn/>
      </form>
    }
    
  }
  
  
}

export default CardDescription;