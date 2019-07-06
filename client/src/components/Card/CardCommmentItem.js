import React from 'react'

const CardCommentItem = ({ comment }) => {
  
  return <div>
      {/*<p>Par {comment.author.email}</p>*/}
      <p className="bg-white p-2 rounded text-gray-600 text-sm mb-3">{ comment.text }</p>
    </div>
};

export default CardCommentItem;