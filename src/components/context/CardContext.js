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
});

export default CardContext;
