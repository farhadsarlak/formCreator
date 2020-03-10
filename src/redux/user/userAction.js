import userTypes from './userTypes';

export const signUpAction = data =>({
    type   : userTypes.SIGN_UP_USER,
    payload: {data}
});


export const loginAction= credential =>({
    type:userTypes.LOGIN_USER,
    payload:{credential}
});

export const logoutAction=()=>({
    type:userTypes.SIGN_OUT_USER
});