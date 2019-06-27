import React from 'react'

class Label extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      name: props.name,
      color: props.color
    }
  }
  
  check = (e) => {
    e.preventDefault();
    this.setState({ selected: !this.state.selected }, () => {
      if(this.state.selected){
        this.props.addLabel(this.state, this.props.card);
      } else {
        this.props.removeLabel(this.state, this.props.card);
      }
    });
    
  };
  
  render() {
    return <div className={this.props.color + " px-2 py-1 font-semibold rounded text-white my-2 mr-2 text-sm flex justify-between w-full"}
              onClick={this.check}
           >
            {this.props.name}
            {this.state.selected ? <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg> : ''}
          </div>
  }
  
}

export default Label;