import * as React from 'react';

import { add } from '@ifss/tools';

import { Select } from 'antd';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
}

export const Link = (props: LinkProps) => {
  console.log('linklink');
  const { children, href, ...rest } = props;

  if (rest.target === '_blank') {
    rest.rel = 'noopener noreferrerrrqqq';
  }

  return (
    <div>
      <Select>
        <Select.Option>1</Select.Option>
      </Select>
      <div>::::{add(1, 9)}</div>
      <a href={href} {...rest}>
        {children}
      </a>
    </div>
  );
};
