import userTypes from './userTypes';

export const signUp = data =>({
    type   : userTypes.SIGN_UP_USER,
    payload: data
});


