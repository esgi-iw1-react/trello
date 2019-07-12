import React from 'react';

const UserAvatar = ({username}) => {
  return (
      <span className="rounded-full mr-3 bg-gray-300 h-8 w-8 flex justify-center items-center font-bold">{username}</span>
  );
};

export default UserAvatar;