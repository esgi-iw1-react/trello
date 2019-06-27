import React from 'react'

class CardAddBtn extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showDiv: false,
      children: ''
    }
  }
  
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      showDiv: !this.state.showDiv
    }, () => {
      if(this.state.showDiv){
        this.setState({
          children: this.props.children
        })
      } else {
        this.setState({
          children: ''
        })
      }
    });
  };
  
  render() {
    return (
        <div className="relative">
          <button className="bg-gray-500 font-semibold p-2 rounded text-gray-900 text-sm w-32 mb-2"
                  onClick={this.handleClick}>
                  {this.props.name}
          </button>
          {this.state.children}
        </div>
    );
  }
  
}

export default CardAddBtn