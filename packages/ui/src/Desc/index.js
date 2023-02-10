import React from 'react';

const Desc = (props) => {
  const { text = 'desc deault' } = props;
  return <div>{text}</div>;
};

export default Desc;
