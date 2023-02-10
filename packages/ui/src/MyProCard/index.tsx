import React from 'react';
import { Card, Space, Image, Button as AntdButton } from 'antd';

const MyProCard: React.FC = () => (
  <Space direction="vertical" size={16}>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p> MyProCard Card content123</p>
      <p> MyProCard Card content</p>
      <p> MyProCard Card content</p>
    </Card>
    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p> MyProCard Card content</p>
      <p> MyProCard Card content</p>
      <p> MyProCard Card content</p>
    </Card>
    AntdButton: <AntdButton type="primary">im procard的AntdButton</AntdButton>
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  </Space>
);

export default MyProCard;
