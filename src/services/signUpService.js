import http from './httpService';
import config from '../config.json';

export function signUp (name,email,password){
    return http.post(config.api_users,{name,email,password});
}