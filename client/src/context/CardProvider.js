import React, { Component } from 'react'
import CardContext from './CardContext';

class CardProvider extends Component {
  
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3001';
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    };
    this.state = {
      lists: [],
      labels: [],
      user: {},
      users: [],
      fetchLists: () => {
        fetch(`${this.url}/list`, { headers: this.headers })
          .then(res => res.json())
          .then(data => {
            this.setState({
              lists: data
            })
          })
      },
      reorder: (sourceCol, sourceIndex, destinationCol, destinationIndex) => {
        const lists = [...this.state.lists];
        const card = lists[sourceCol].cards[sourceIndex];
        lists[sourceCol].cards.splice(sourceIndex, 1);
        lists[destinationCol].cards.splice(destinationIndex, 0, card);
        
        let object = {};
        lists.forEach(list => {
          const listId = list._id;
          object[listId] = list.cards.map((card, index) => {
            return {_id: card._id, index: index}
          });
        });
        this.setState({
          lists: lists
        });
        fetch(`${this.url}/card/reorder`, {
          method: 'PUT',
          headers: this.headers,
          body: JSON.stringify(
            {
              lists: object,
            }
          )
        })
      },
      addComment: (comment, card, list) => {
        fetch(`${this.url}/comment/${card._id}`, {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: this.headers
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if (c._id === card._id) {
                    let updatedCard = { ...c, comments: [...c.comments, comment] };
                    newCards.push(updatedCard);
                    return updatedCard;
                  }
                  newCards.push(c);
                  return c;
                });
                return { ...l, cards: newCards};
              }
              return l;
            })
          })
        });
      },
      editDescription: (description, card, list) => {
        fetch(`${this.url}/card/${card._id}`, {
          method: 'PUT',
          body: JSON.stringify({description: description}),
          headers: this.headers
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, description: description };
                    newCards.push(newCard);
                    return newCard
                  }
                  newCards.push(c);
                  return c
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        });
        
      },
      editTitle: (title, card, list) => {
        fetch(`${this.url}/card/${card._id}`, {
          method: 'PUT',
          body: JSON.stringify({title: title}),
          headers: this.headers
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, title: title };
                    newCards.push(newCard);
                    return newCard
                  }
                  newCards.push(c);
                  return c
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        })
      },
      addLabel: (label, card, list) => {
        fetch(`${this.url}/card/${card._id}/label/add/${label._id}`, { method: 'PUT', headers: this.headers})
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, labels: [...c.labels, label] };
                    newCards.push(newCard);
                    return newCard
                  }
                  newCards.push(c);
                  return c
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        });
      },
      removeLabel: (label, card, list) => {
        fetch(`${this.url}/card/${card._id}/label/remove/${label._id}`, { method: 'PUT', headers: this.headers})
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, labels: [...c.labels].filter(l => l.color !== label.color)};
                    newCards.push(newCard);
                    return newCard
                  }
                  newCards.push(c);
                  return c
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        })
      },
      editLabel: (label, card, list) => {
        fetch(`${this.url}/label/${label._id}`, {
          method: 'PUT',
          body: JSON.stringify({name: label.name}),
          headers: this.headers
        })
          .then(res => res.json())
          .then(data => {
            this.setState({
              lists: this.state.lists.map(l => {
                const newCards = [];
                if(l._id === list._id){
                  l.cards.map(c => {
                    if(c._id === card._id){
                      const newCard = { ...c, labels: [...c.labels].map( lab => {
                          if(lab.color === label.color){
                            lab.name = label.name
                          }
                          return lab;
                        })};
                      newCards.push(newCard);
                      return newCard
                    }
                    newCards.push(c);
                    return c
                  });
                  return { ...l, cards: newCards };
                }
                return l;
              })
            })
          });
      },
      fetchLabels: () => {
        fetch(`${this.url}/label`, { headers: this.headers })
        .then(res => res.json())
        .then(data => {
          this.setState({
            labels: data
          })
        })
      },
      addCard: (list) => {
        fetch(`${this.url}/card/${list._id}`, { method: 'POST', headers: this.headers})
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              if(l._id === list._id){
                return { ...l, cards: [...l.cards, { _id: data._id, title: '', description: '', labels: [], comments: []  }] }
              }
              return l;
            })
          })
        })
      },
      addList: (name) => {
        fetch(`${this.url}/list`,
          { method: 'POST', body: JSON.stringify({name: name}), headers: this.headers
        }).then(res => res.json())
          .then(data => {
            this.setState({
              lists: [...this.state.lists, { id: data._id, name: name, cards: [] }]
            })
          });
      },
      login: (email, password) => {
        return new Promise((resolve, reject) => {
          fetch(`${this.url}/login`, {
            method: 'POST',
            body: JSON.stringify({email: email, password: password}),
            headers: this.headers
          }).then(res => {
            if(res.status === 400){
              return reject(res.statusText);
            }
            return res.json();
          })
          .then(user => {
            this.setState({
              user: user.user,
            });
            this.headers.Authorization = `Bearer ${user.token}`;
            localStorage.setItem('token', user.token);
            localStorage.setItem('user', JSON.stringify(user.user));
            return resolve();
          })
          .catch(err => console.log(err))
        });
      },
      register: (username, email, password) => {
        return new Promise((resolve, reject) => {
          fetch(`${this.url}/register`, {
            method: 'POST',
            body: JSON.stringify({username: username, email: email, password: password}),
            headers: this.headers
          })
          .then(res => {
            if(res.statusCode === 400){
              return reject(res.statusText);
            }
            return resolve(res.json());
          })
          .catch(err => console.log(err))
        })
      },
      fetchUsers: () => {
        fetch(`${this.url}/user`, { headers: this.headers })
        .then(res => res.json())
        .then(users => this.setState({ users: users }))
        .catch(err => console.log(err));
      },
      cardAddUser: (user, card, list) => {
        fetch(`${this.url}/card/${card._id}/user/add/${user._id}`, {method: 'PUT', headers: this.headers})
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id) {
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, users: [...c.users, user] };
                    newCards.push(newCard);
                    return newCard;
                  }
                  newCards.push(c);
                  return c;
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        })
        .catch(err => console.log(err))
      },
      cardRemoveUser: (user, card, list) => {
        fetch(`${this.url}/card/${card._id}/user/remove/${user._id}`, {method: 'PUT', headers: this.headers})
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id) {
                l.cards.map(c => {
                  if(c._id === card._id){
                    const newCard = { ...c, users: [...c.users].filter(u => u._id !== user._id) };
                    newCards.push(newCard);
                    return newCard;
                  }
                  newCards.push(c);
                  return c;
                });
                return { ...l, cards: newCards };
              }
              return l;
            })
          })
        })
        .catch(err => console.log(err))
      }
      
    };
  }
  
  render() {
    return (
      <CardContext.Provider value={this.state}>
        {this.props.children}
      </CardContext.Provider>
    )
  }
  
}

export default CardProvider;
