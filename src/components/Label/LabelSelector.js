import React from 'react'
import Label from "./Label";
import {addLabel, removeLabel} from "../../redux/actions/cardActions";
import {connect} from "react-redux";

class LabelSelector extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      labels: [
        { name: 'Admin', color: 'bg-yellow-500' , selected: false},
        { name: 'Front', color: 'bg-red-500' , selected: false},
        { name: 'Debug', color: 'bg-green-500' , selected: true},
        { name: 'Back', color: 'bg-purple-500' , selected: false},
        { name: 'Test', color: 'bg-blue-500' , selected: true}
      ]
    }
  }
  
  render() {
    const { labels } = this.state;
    return (
      <div className="p-4 bg-white shadow absolute top-auto z-10 w-full">
        <h1 className="font-bold text-blue-500">Labels</h1>
        <div className="flex flex-col w-full">
          {
            labels.map( (label, index) => { return <Label key={index}
                                                          name={label.name}
                                                          color={label.color}
                                                          selected={label.selected}
                                                          addLabel={this.props.addLabel}
                                                          removeLabel={this.props.removeLabel}
                                                          card={this.props.card}
            /> })
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLabel: (label, card) => dispatch(addLabel(label, card)),
    removeLabel: (label, card) => dispatch(removeLabel(label, card))
  }
};

export default connect(null, mapDispatchToProps)(LabelSelector);

