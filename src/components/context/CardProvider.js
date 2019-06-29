import React, { Component } from 'react'
import CardContext from './CardContext';

class CardProvider extends Component {
  
  state = {
    cards: [],
    listCard: () => {
      this.setState({
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
      })
    },
    addComment: (comment, card) => {
      this.setState({
        cards: this.state.cards.map(c => {
          if (c.id === card.id) {
            return {
              ...c,
              comments: [...c.comments, comment]
            }
          }
          return c;
        })
      })
    },
    editDescription: (description, card) => {
      this.setState({
          cards: this.state.cards.map(c => {
            if(c.id === card.id){
              return {
                ...c,
                description : description
              }
            }
            return c
          })
      })
    },
    editTitle: (title, card) => {
      this.setState({
        cards: this.state.cards.map(c => {
          if(c.id === card.id){
            return {
              ...c,
              title : title
            }
          }
          return c
        })
      })
    },
    addLabel: (label, card) => {
      this.setState({
        cards: this.state.cards.map(c => {
          if(c.id === card.id){
            return {
              ...c,
              labels : [...c.labels, label]
            }
          }
          return c
        })
      })
    },
    removeLabel: (label, card) => {
      this.setState({
        cards: this.state.cards.map((c) => {
          if (c.id === card.id) {
            return {
              ...c,
              labels: [...c.labels].filter(l => l.color !== label.color)
            };
          }
          return c
        })
      })
    },
    editLabel: (label, card) => {
      this.setState({
        cards: this.state.cards.map((c) => {
          if (c.id === card.id) {
            return {
              ...c,
              labels: [...c.labels].map( (l) => {
                if(l.color === label.color){
                  l.name = label.name;
                }
                return l;
              })
            };
          }
          return c
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
