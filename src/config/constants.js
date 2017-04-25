export const API_URL = process.env.NODE_ENV === 'production' ?
                      'https://desolate-earth-24328.herokuapp.com/api' :
                      'https://enigmatic-mountain-38641.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'https://enigmatic-mountain-38641.herokuapp.com/api/cable' :
                       '://enigmatic-mountain-38641.herokuapp.com/api/cable';
