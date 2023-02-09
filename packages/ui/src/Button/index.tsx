import React, { FC } from 'react';
import { add } from '@ifss/tools';
// import style from './index.less';
import './index.less';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'default', disabled }) => {
  console.log('add -> 2 + 31', add(2, 3));
  return (
    <button className="biz_dev_button" onClick={onClick} disabled={disabled}>
      {children}button
    </button>
  );
};

export default Button;
