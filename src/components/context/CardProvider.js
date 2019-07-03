import React, { Component } from 'react'
import CardContext from './CardContext';

class CardProvider extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      fetchLists: () => {
        this.setState({
          lists : [
            {
              id: 1,
              name: 'DONE',
              cards : [
                {
                  id: 1,
                  title: 'Bug de la mort',
                  description: '',
                  labels: [
                    { name: "Test", color: "bg-blue-500"},
                    { name: "Debug", color: "bg-green-500"}
                  ],
                  comments: [
                    "1er commentaire"
                  ],
                },
                {
                  id: 2,
                  title: 'Allo',
                  description: 'best description',
                  labels: [],
                  comments: [],
                }
              ]
            },
            {
              id: 2,
              name: 'IN PROGRESS',
              cards: [
                {
                  id: 3,
                  title: 'Finir le trello',
                  description: '',
                  labels: [
                    { name: "JS", color: "bg-blue-500"},
                    { name: "PHP", color: "bg-green-500"}
                  ],
                  comments: [],
                },
              ]
            }
          ]
        });
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
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if (c.id === card.id) {
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
      },
      editDescription: (description, card, list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if(c.id === card.id){
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
      },
      editTitle: (title, card, list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if(c.id === card.id){
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
      },
      addLabel: (label, card, list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if(c.id === card.id){
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
      },
      removeLabel: (label, card, list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if(c.id === card.id){
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
      },
      editLabel: (label, card, list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            const newCards = [];
            if(l.id === list.id){
              l.cards.map(c => {
                if(c.id === card.id){
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
      },
      addCard: (list) => {
        this.setState({
          lists: this.state.lists.map(l => {
            if(l.id === list.id){
              return { ...l, cards: [...l.cards, { id: 4, title: '', description: '', labels: [], comments: []  }] }
            }
            return l;
          })
        })
      },
      addList: (name) => {
        // console.log(name);debugger;
        this.setState({
          lists: [...this.state.lists, { id: 3, name: name, cards: [] }]
        })
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
