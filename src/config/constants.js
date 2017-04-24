export const API_URL = process.env.NODE_ENV === 'production' ?
                      'https://enigmatic-mountain-38641.herokuapp.com/api' :
                      'https://enigmatic-mountain-38641.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       '//peaceful-headland-77668.herokuapp.com/api/cable' :
                       '//peaceful-headland-77668.herokuapp.com/api/cable';
