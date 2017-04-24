import ActionCable from 'actioncable';
import { WSS_URL } from '../config/constants'

export const createConsumerWithToken = (authToken) => {
  window.App.cable = ActionCable.createConsumer(`${WSS_URL}?token=${authToken}`)
}
