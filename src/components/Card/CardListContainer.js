import React from 'react';
import {connect} from 'react-redux';
import { listCard } from '../../redux/actions/cardActions';
import CardList from "./CardList";


class CardListContainer extends React.Component {

  componentDidMount() {
    this.props.listCard();
  }
  
  render() {
    return <CardList cards={this.props.cards}/>
  }
  
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    listCard: () => dispatch(listCard())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);


