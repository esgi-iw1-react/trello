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
    case "EDIT_DESCRIPTION":
      return {
        ...state,
        cards: state.cards.map(c => {
          if(c.id === action.payload.card.id){
            return {
              ...c,
              description : action.payload.description
            }
          }
          return c
        })
      };
    case "EDIT_TITLE":
      return {
        ...state,
        cards: state.cards.map(c => {
          if(c.id === action.payload.card.id){
            return {
              ...c,
              title : action.payload.title
            }
          }
          return c
        })
      };
    case "ADD_LABEL":
      return {
        ...state,
        cards: state.cards.map(c => {
          if(c.id === action.payload.card.id){
            return {
              ...c,
              labels : [...c.labels, action.payload.label]
            }
          }
          return c
        })
      };
    case "REMOVE_LABEL":
      return {
        ...state,
        cards: state.cards.map((c) => {
          if (c.id === action.payload.card.id) {
            return {
              ...c,
              labels: [...c.labels].filter(label => label.name !== action.payload.label.name)
            };
          }
          return c
        })
      };
    case "EDIT_LABEL":
      return {
        ...state,
        cards: state.cards.map((c) => {
          if (c.id === action.payload.card.id) {
            return {
              ...c,
              labels: [...c.labels].map( (label) => {
                if(label.color === action.payload.label.color){
                  label.name = action.payload.label.name;
                }
                return label;
              })
            };
          }
          return c
        })
      };
    default:
      return state;
  }
};

export default cardReducer;