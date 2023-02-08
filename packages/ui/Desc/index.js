import React from 'react';
import styles from './index.module.css';

// import './index.less';
// {/* <div className={'wrapwrap'}>{text}</div> */}

var Desc = function Desc(props) {
  var _props$text = props.text,
    text = _props$text === void 0 ? 'desc' : _props$text;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: styles.wrapwrap,
    },
    text,
  );
};
export default Desc;
