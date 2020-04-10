import { SET_ALERT } from './types'
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, alertType ) => dispatch => {
    const id = uuidv4()
    dispatch ({
        type: SET_ALERT,
        payload: {
            msg, alertType, id
        }
    })
}