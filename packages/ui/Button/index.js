import React from 'react';
import { add } from '@ifss/tools';
// import style from './index.less';
import './index.css';
var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'default' : _ref$type,
    disabled = _ref.disabled;
  console.log('add -> 2 + 31', add(2, 3));
  return /*#__PURE__*/ React.createElement(
    'button',
    {
      className: 'biz_dev_button',
      onClick: onClick,
      disabled: disabled,
    },
    children,
    'xx',
  );
};
export default Button;
