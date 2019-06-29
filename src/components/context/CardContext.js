import { createContext } from "react";

const CardContext = createContext({
  lists: [],
  fetchLists: () => {},
  addComment: () => {},
  editDescription: () => {},
  editTitle: () => {},
  addLabel: () => {},
  removeLabel: () => {},
  editLabel: () => {},
  addCard: () => {},
});

export default CardContext;
