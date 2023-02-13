import React, { FC } from 'react';
import * as tools from '@ifss/common-tools';
import MyDesc from '@/MyDesc';

console.log('module ui/button');
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}

const MyButton: FC<ButtonProps> = function ({ children, onClick, type = 'default', disabled }) {
  console.log('我是 ifss/ui/Button 组件, 打印引入的tool helper', tools);
  return (
    <div>
      <div>
        <MyDesc />
      </div>
      <div>
        <button className="biz_dev_button" onClick={onClick} disabled={disabled}>
          {children} aaaabtn
        </button>
      </div>
    </div>
  );
};

export default MyButton;
