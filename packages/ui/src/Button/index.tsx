import React, { FC } from 'react';
import * as tools from '@ifss/tools';
import Desc from '../Desc';
// import style from './index.less';
import './index.less';
console.log('module ui/button');
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'default', disabled }) => {
  console.log('add -> toolstoolstoolstoolstoolstools btn组件1231111zx哪', tools);
  return (
    <div>
      <div>
        <Desc />
      </div>
      <div>
        <button className="biz_dev_button" onClick={onClick} disabled={disabled}>
          {children}button1
        </button>
      </div>
    </div>
  );
};

export default Button;
