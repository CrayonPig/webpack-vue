import ajax from './base';

export const toLogin = data => ajax({
  data,
  url: '/Login/ajaxLogin',
  method: 'POST',
})

export const getUserInfo = () => ajax({
  url: '/Member/getMemberInfo',
  method: 'GET',
})

export const sendSms = data => ajax({
  data,
  url: `/Sms/sendSms?phone_number=${data.phone_number}`,
  method: 'GET',
})

export const inviteLogin = data => ajax({
  data,
  url: `/invite/inviteLogin`,
  method: 'POST',
})