import React from 'react';

const MyDesc = function (props) {
  const { text = 'Desc default text' } = props;
  return <div>{text} </div>;
};

export default MyDesc;
