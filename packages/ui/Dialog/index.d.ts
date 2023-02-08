import React, { FC } from 'react';
import './index.less';
interface DialogProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'default' | 'primary' | 'secondary';
  disabled?: boolean;
}
declare const Dialog: FC<DialogProps>;
export default Dialog;
