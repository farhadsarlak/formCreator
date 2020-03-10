import userTypes from './userTypes';
import axios from 'axios';

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

export const fetchUsersStart= () => ({
    type: userTypes.FETCH_USERS_START,
});

export const fetchUsersSuccess= users =>({
    type: userTypes.FETCH_USERS_SUCCESS,
    payload:users
});

export const fetchUsersError= error =>({
    type: userTypes.FETCH_USERS_ERROR,
    payload:error
});

export const getAllUser= url =>{
    return dispatch =>{
        dispatch(fetchUsersStart());
        axios.get(url).then(response =>{
            dispatch(fetchUsersSuccess(response.data));
            return response.data;
        }).catch(error=>{
            dispatch(fetchUsersError(error))
        })
    }
};