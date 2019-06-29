import React, { Component } from 'react'
import CardContext from './CardContext';

class CardProvider extends Component {
  
  state = {
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
              return c
            });
            return { ...l, cards: newCards };
          }
          return l;
        })
      })
    },
    editLabel: (label, card, list) => {
      // this.setState({
      //   cards: this.state.cards.map((c) => {
      //     if (c.id === card.id) {
      //       return {
      //         ...c,
      //         labels: [...c.labels].map( (l) => {
      //           if(l.color === label.color){
      //             l.name = label.name;
      //           }
      //           return l;
      //         })
      //       };
      //     }
      //     return c
      //   })
      // })
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
              return c
            });
            return { ...l, cards: newCards };
          }
          return l;
        })
      })
    }
  };
  
  render() {
    return (
      <CardContext.Provider value={this.state}>
        {this.props.children}
      </CardContext.Provider>
    )
  }
  
}

export default CardProvider;
