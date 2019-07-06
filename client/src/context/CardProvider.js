import React, { Component } from 'react'
import CardContext from './CardContext';

class CardProvider extends Component {
  
  constructor(props) {
    super(props);
    this.url = 'http://localhost:3001';
    this.state = {
      lists: [],
      labels: [],
      user: {},
      fetchLists: () => {
        fetch(`${this.url}/list`)
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
        this.setState({
          lists: lists
        });
      },
      addComment: (comment, card, list) => {
        fetch(`${this.url}/comment/${card._id}`, {
          method: 'POST',
          body: JSON.stringify({text: comment, author: '5d1e6ceeae083f00eee07507'}),
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            lists: this.state.lists.map(l => {
              const newCards = [];
              if(l._id === list._id){
                l.cards.map(c => {
                  if (c._id === card._id) {
                    let updatedCard = { ...c, comments: [...c.comments, {text: comment, author: '5d1e6ceeae083f00eee07507'}] };
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
          headers: {
            'Content-Type': 'application/json',
          },
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
          headers: {
            'Content-Type': 'application/json',
          },
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
        fetch(`${this.url}/card/${card._id}/label/add/${label._id}`, { method: 'PUT'})
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
        fetch(`${this.url}/card/${card._id}/label/remove/${label._id}`, { method: 'PUT'})
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
          headers: { 'Content-type': 'application/json' }
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
        fetch(`${this.url}/label`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            labels: data
          })
        })
      },
      addCard: (list) => {
        fetch(`${this.url}/card/${list._id}`, { method: 'POST'})
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
          { method: 'POST', body: JSON.stringify({name: name}), headers: {'Content-type': 'application/json'}
        }).then(res => res.json())
          .then(data => {
            this.setState({
              lists: [...this.state.lists, { id: data._id, name: name, cards: [] }]
            })
          });
      },
      login: (email, password) => {
        fetch(`${this.url}/login`, {
          method: 'POST',
          body: JSON.stringify({email: email, password: password}),
          headers: {
            'Content-type': 'application/json'
          }
        }).then(res => res.json())
          .then(token => {
            console.log(token);
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
