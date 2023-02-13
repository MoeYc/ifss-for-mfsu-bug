import { IApp } from '@/types';

export enum EAppPath {
  app1 = '/qiankun-app1',
  app2 = '/qiankun-app2',
}

export const APP_LIST: IApp[] = [
  {
    name: 'app1',
    entry: 'http://localhost:5001',
    path: EAppPath.app1,
  },
  {
    name: 'app2',
    entry: 'http://localhost:5002',
    path: EAppPath.app2,
  },
];
