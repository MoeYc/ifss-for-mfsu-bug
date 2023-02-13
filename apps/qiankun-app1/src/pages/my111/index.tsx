import React, { useEffect } from 'react';
import { useModel, history as umiHistory } from 'umi';
import styles from './index.less';

const qiankunJump = (url: string, name = '页面名称', params = null) => {
  console.log(
    (window as any).__POWERED_BY_QIANKUN__,
    'window.__POWERED_BY_QIANKUN__',
  );
  (window as any).__POWERED_BY_QIANKUN__
    ? history.pushState(params, name, url)
    : umiHistory.push(url);
};

const Index: React.VFC = () => {
  console.log('app1 -> my render');
  // debugger;
  return (
    <div>
      <h1>my111</h1>
      <button
        onClick={() => {
          umiHistory.push('/login');
        }}
      >
        去我的login
      </button>
      <button
        onClick={() => {
          qiankunJump('/app2');
        }}
      >
        去子应用2
      </button>
    </div>
  );
};

export default Index;
