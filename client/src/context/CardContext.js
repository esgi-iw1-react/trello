import { createContext } from "react";

const CardContext = createContext({
  headers: {},
  lists: [],
  labels: [],
  user: {},
  users: [],
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
  register: () => {},
  fetchUsers: () => {},
  cardAddUsers: () => {},
  cardRemoveUsers: () => {},
});

export default CardContext;
