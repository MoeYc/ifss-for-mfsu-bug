import { MyProCard } from '@ifss/common-ui';
import _ from 'lodash';
import styles from './index.less';

console.log(_.has, 'lodash.has');

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index234</h1>
      <MyProCard />
    </div>
  );
}
