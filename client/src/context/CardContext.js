import { createContext } from "react";

const CardContext = createContext({
  lists: [],
  labels: [],
  user: {},
  fetchLists: () => {},
  reorder: () => {},
  addComment: () => {},
  editDescription: () => {},
  editTitle: () => {},
  fetchLabels: () => {},
  addLabel: () => {},
  removeLabel: () => {},
  editLabel: () => {},
  addCard: () => {},
  addList: () => {},
  login: () => {},
  register: () => {}
});

export default CardContext;
