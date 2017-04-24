export const API_URL = process.env.NODE_ENV === 'production' ?
                      '//enigmatic-mountain-38641.herokuapp.com/api' :
                      '//enigmatic-mountain-38641.herokuapp.com/api';

export const WS_URL =  process.env.NODE_ENV === 'production' ?
                       'https://enigmatic-mountain-38641.herokuapp.com/api/cable' :
                       'ws://enigmatic-mountain-38641.herokuapp.com/api/cable';
