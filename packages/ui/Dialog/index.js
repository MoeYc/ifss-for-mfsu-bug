import React from 'react';
import './index.css';
var Dialog = function Dialog(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'dialog' : _ref$type;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'biz_dev_dialog',
      onClick: onClick,
    },
    children,
    ' hello',
  );
};
export default Dialog;
