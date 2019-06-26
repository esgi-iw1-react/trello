import React from 'react'

class Label extends React.Component {
  
  render() {
    return <span className={this.props.color + " px-2 py-1 font-semibold rounded text-white mr-2 text-sm"}>
      {this.props.text}
    </span>
  }
  
}

export default Label;