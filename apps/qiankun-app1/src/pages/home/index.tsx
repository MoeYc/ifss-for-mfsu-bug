import React, { useEffect } from 'react';
import { useModel, history } from 'umi';
import styles from './index.less';

const Index: React.VFC = (props) => {
  // const masterProps = useModel('@@qiankunStateFromMaster');
  console.log('app1 homeindex -> render');
  // debugger;
  // console.log(masterProps, 'useQiankunStateForSlave -> masterProps');
  // useEffect(() => {
  //   // 这里要加 ? 的，防止空指针异常
  //   masterProps?.onGlobalStateChange((state: any) => {
  //     console.log('statestate');
  //     const { a } = state;
  //     if (a) {
  //       console.log('master状态变了:', state);
  //     }
  //   });
  // }, []);
  // const changeMainState = () => {
  //   masterProps.setMasterState({ a: 88888 });
  // };
  return (
    <div>
      {/* <button className={styles.title} onClick={changeMainState}>
        改变主应用状态a为8888
      </button> */}
      <div style={{ background: 'skyblue' }}>
        <h1>App1</h1>
        <button
          className={styles.title}
          onClick={() => {
            history.push('/my');
            console.log('after');
          }}
        >
          去my
        </button>
        <button
          className={styles.title}
          onClick={() => {
            window.history.replaceState(null, 'setting', '/');
            console.log('去主应用after');
          }}
        >
          去主应用
        </button>
      </div>

      {/* <h1>主应用传过来的props {masterProps.masterState.a}</h1> */}
    </div>
  );
};

export default Index;
