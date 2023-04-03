import React from 'react';
import { Card, Space, Image, Button as AntdButton } from 'antd';
import MyDesc from '../MyDesc';
import './index.less';

const MyProCard: React.FC = function () {
  return (
    <Space direction="vertical" size={16}>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 3000 }}>
        <p>MyProCard Card content content1</p>
        <p> MyProCard Card content content2</p>
        <p> MyProCard Card content content3</p>
      </Card>
      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p> MyProCard Card content</p>
        <p> MyProCard Card content</p>
        <p> MyProCard Card content</p>
      </Card>
      AntdButton: <AntdButton type="primary">im procard的AntdButton </AntdButton>
      <div className={'customBtnCls'}>
        <AntdButton type="primary">im procard的 customBtnCls AntdButton </AntdButton>
      </div>
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <p className="pink">text class: procardWrapperyyy</p>
      <MyDesc />
    </Space>
  );
};

export default MyProCard;
