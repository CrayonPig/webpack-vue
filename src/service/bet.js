import ajax from './base';

export const getBetInfo = data => ajax({
  method: 'GET',
  url: `/12/bet/info?id=${data.id}`
})

export const getDownInfo = data => ajax({
  method: 'GET',
  url: `/12/bet/down/info?id=${data.id}`
})

export const postDown = data => ajax({
  data,
  method: 'POST',
  url: `bet/down/put`
})