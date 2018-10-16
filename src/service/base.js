import qs from 'qs';
import axios from 'axios';
import Promise from 'promise-polyfill';
// 让ajax携带cookie
axios.defaults.withCredentials = true;
const instince = axios.create({
  timeout: 20000,
  withCredentials: true,
});

const base = (args) => {
  // if (args.method.toLocaleLowerCase() === 'post') {
  return instince({
    ...args,
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded' 
    },
    data: qs.stringify(args.data)
  })
  // }
  // return instince(args);
};

const ERROR_LIST = {

};

export default args => base(args)
  .then((result) => {
    if (!window.Promise) {
      window.Promise = Promise;
    }

    return result.data;
  }, () => {
    if (!args.noError) {

    }
    return Promise.resolve({
      error: '未知错误'
    });
  });