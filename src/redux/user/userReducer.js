import userTypes from './userTypes';


const INITIAL_STATE= {
    currentUser:{},
    users:[],
    error:'',
    isFetching:false
};


const userReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {

        case userTypes.FETCH_USERS_START:
            return{
                ...state,
                isFetching: true
            };

        case userTypes.FETCH_USERS_SUCCESS:
            return{
                ...state,
                users: action.payload
            };

        case userTypes.FETCH_USERS_ERROR:
            return{
                ...state,
                isFetching:false,
                error:action.payload
            };

        case userTypes.LOGIN_USER:
            return{
                ...state,
                authenticated:true,
                currentUser: action.payload.credential
            };

        case userTypes.SIGN_UP_USER:
            return{
                ...state,
                authenticated:true,
                currentUser:action.payload.data
            };

        case userTypes.SIGN_OUT_USER:
            return{
                ...state,
                authenticated: false,
                currentUser:{}
            };

        default:
            return state
    }
};

export default userReducer;