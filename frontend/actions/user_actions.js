import * as APIUtil from '../util/api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})





export const loginUser = user => dispatch =>
APIUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)))

