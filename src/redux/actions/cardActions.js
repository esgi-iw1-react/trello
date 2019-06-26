export function listCard(){
  return {
    type: 'LIST_CARD',
    payload : {
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
    }
  }
}

export function addComment(comment, card) {
  return {
    type: 'ADD_COMMENT',
    payload: {
      comment,
      card
    }
  }
}
