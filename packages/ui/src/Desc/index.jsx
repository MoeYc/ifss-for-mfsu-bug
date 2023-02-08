import React from 'react';
import styles from './index.module.less';

// import './index.less';
// {/* <div className={'wrapwrap'}>{text}</div> */}

const Desc = (props) => {
  const { text = 'desc' } = props;
  return <div className={styles.wrapwrap}>{text}</div>;
};

export default Desc;
