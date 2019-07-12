import React from 'react'

const CardCommentItem = ({ comment }) => {
  
  return <div>
      <div className="flex items-center">
        <p>Par {comment.author.username}</p>
      </div>
      <p className="bg-white p-2 rounded text-gray-600 text-sm mb-3">{ comment.text }</p>
    </div>
};

export default CardCommentItem;