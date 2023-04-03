import {MyProCard} from '@ifss/common-ui';
import {InnerButton} from '@ifss/components';
import yayJpg from '../assets/yay.jpg';
import 'antd/dist/antd.variable.min.css';
import './index.less';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p className={'skyblue'}>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <MyProCard />
      <InnerButton>InnerButton</InnerButton>
    </div>
  );
}
