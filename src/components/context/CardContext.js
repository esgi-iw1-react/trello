import { createContext } from "react";

const CardContext = createContext({
  cards: [],
  listCard: () => {},
  addComment: () => {},
  editDescription: () => {},
  editTitle: () => {},
  addLabel: () => {},
  removeLabel: () => {},
  editLabel: () => {},
});

export default CardContext;
