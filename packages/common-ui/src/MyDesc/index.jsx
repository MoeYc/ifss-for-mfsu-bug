import React from 'react';
import './index.less';

const MyDesc = function (props) {
  const { text = 'Desc default text' } = props;
  return <div className={'descWrapper'}>{text}</div>;
};

export default MyDesc;
