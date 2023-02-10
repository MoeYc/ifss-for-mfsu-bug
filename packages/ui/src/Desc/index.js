import React from 'react';

const Desc = (props) => {
  const { text = 'desc' } = props;
  return <div>{text}</div>;
};

export default Desc;
