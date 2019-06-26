import React from 'react'
import Card from "./Card";
import { addComment } from '../../redux/actions/cardActions'
import {connect} from "react-redux";

class CardContainer extends React.Component {
  
  render() {
    return <Card card={this.props.card}
                 addComment={this.props.addComment}
            />
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (comment, card) => dispatch(addComment(comment, card))
  }
};

export default connect(undefined, mapDispatchToProps)(CardContainer)
