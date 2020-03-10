import userTypes from './userTypes';


const INITIAL_STATE= {
    currentUser:{}
};


const userReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
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