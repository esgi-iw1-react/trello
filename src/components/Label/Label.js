import React from 'react'

class Label extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected,
      name: props.name,
      color: props.color,
      edit: false
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
  
  toggleEdit = (e) => {
    e.preventDefault();
    this.setState({
      edit: true
    })
  };
  
  edit = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
    this.props.editLabel(this.state, this.props.card)
  };
  
  
  
  
  render() {
    return <div className="flex items-center">
          {this.state.edit ? <input className="text-gray-900 z-20" type="text" value={this.state.name} onChange={this.edit}/>
          :
          <div onClick={this.check} className={this.props.color + " px-2 py-1 font-semibold rounded text-white my-2 mr-2 text-sm flex justify-between w-full"}>
              <span>{this.props.name}</span>
            {this.state.selected ? <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="20" width="20" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg> : ''}
          </div>}
          <svg onClick={this.toggleEdit} height="25" width="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit"><rect width="24" height="24" opacity="0"/><path d="M19.4 7.34L16.66 4.6A2 2 0 0 0 14 4.53l-9 9a2 2 0 0 0-.57 1.21L4 18.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 20h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71zM9.08 17.62l-3 .28.27-3L12 9.32l2.7 2.7zM16 10.68L13.32 8l1.95-2L18 8.73z"/></g></g></svg>
      </div>
  }
  
}

export default Label;