export const API_URL = process.env.NODE_ENV === 'production' ?
                      'https://desolate-earth-24328.herokuapp.com/api' :
                      'https://desolate-earth-24328.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'wss:https://desolate-earth-24328.herokuapp.com' :
                       'ws:https://desolate-earth-24328.herokuapp.com';
