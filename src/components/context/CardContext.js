import { createContext } from "react";

const CardContext = createContext({
  lists: [],
  fetchLists: () => {},
  reorder: () => {},
  addComment: () => {},
  editDescription: () => {},
  editTitle: () => {},
  addLabel: () => {},
  removeLabel: () => {},
  editLabel: () => {},
  addCard: () => {},
  addList: () => {},
});

export default CardContext;
