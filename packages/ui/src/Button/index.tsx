import React, { FC } from 'react';
import * as tools from '@ifss/tools';
import Desc from '@/Desc';
// import style from './index.less';
import './index.less';
console.log('module ui/button');
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, type = 'default', disabled }) => {
  console.log('我是 ifss/ui/Button 组件，打印引入的tools', tools);
  return (
    <div>
      <div>
        <Desc />
      </div>
      <div>
        <button className="biz_dev_button" onClick={onClick} disabled={disabled}>
          {children} aaaabtn
        </button>
      </div>
    </div>
  );
};

export default Button;
