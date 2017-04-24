export const API_URL = process.env.NODE_ENV === 'production' ?
                      '//enigmatic-mountain-38641.herokuapp.com/api' :
                      '//enigmatic-mountain-38641.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'wss://enigmatic-mountain-38641.herokuapp.com/api/cable' :
                       'https://enigmatic-mountain-38641.herokuapp.com/api/cable';
