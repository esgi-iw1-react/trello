const cardReducer = (state = { cards : [] }, action) => {
  switch (action.type) {
    case "LIST_CARD":
      return {
        ...state,
        cards : action.payload.cards
      };
    case "ADD_COMMENT":
      return {
        cards: state.cards.map(c => {
          if (c.id === action.payload.card.id) {
            return {
              ...c,
              comments: [...c.comments, action.payload.comment]
            }
          }
          return c;
        })
      };
    default:
      return state;
  }
};

export default cardReducer;
