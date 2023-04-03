import React from 'react';
import { Button } from 'antd';
import classnames from 'classnames';
import './index.less';

const InnerButton = function (props) {
  const { type, className, ...rest } = props;
  if (type === 'inner-primary') {
    return <Button {...rest} type="primary" className={classnames('primary', className)} />;
  }
  return <Button {...props} />;
};

export default InnerButton;
