import Mock from 'mockjs';

import user from './user';
import routes from './routes';

const mocks = [...user, ...routes];

export const mockData = () => {
  for (const i of mocks) {
    const url = `/mock${i.url}`;
    Mock.mock(new RegExp(url), i.type, i.response);
  }
};
