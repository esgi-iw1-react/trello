import React from 'react'
import Card from "./Card";
import {addComment, editDescription, editTitle} from '../../redux/actions/cardActions'
import {connect} from "react-redux";

class CardContainer extends React.Component {
  
  render() {
    return <Card card={this.props.card}
                 addComment={this.props.addComment}
                 editDescription={this.props.editDescription}
                 editTitle={this.props.editTitle}
    />
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment, card) => dispatch(addComment(comment, card)),
    editDescription: (description, card) => dispatch(editDescription(description, card)),
    editTitle: (title, card) => dispatch(editTitle(title, card))
  }
};

export default connect(undefined, mapDispatchToProps)(CardContainer)
