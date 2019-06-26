import React from 'react'

class CardTitle extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text : props.title,
      edit : false
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
    this.setState({
      edit: false
    });
    this.props.onSubmit(this.state.text, this.props.card);
  };
  
  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  };
  
  render() {
    if(this.props.title !== "" && !this.state.edit){
      return <h1 className="font-bold text-gray-900 text-sm text-xl mb-3" onClick={this.toggleEdit}>{this.props.title}</h1>
    } else {
      return <form onSubmit={this.handleSubmit}>
        <input type="text" className="w-full p-2"
                  placeholder="Ajoutez un titre"
                  onChange={this.handleChange}
                  value={this.state.text}
        >
        </input>
      </form>
    }
    
  }
  
  
}

export default CardTitle;