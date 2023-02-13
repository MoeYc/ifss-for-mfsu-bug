import React from 'react';
import styles from './index.less';

export default function IndexPage() {
  console.log('app2 index render');
  return (
    <div>
      <h1 className={styles.title}>App2</h1>
      <h1 className={styles.title}>App2</h1>
    </div>
  );
}
