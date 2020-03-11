import createElementTypes from './createElementTypes';


const INITIAL_STATE = {
  elements:[]
};


const createElementReducer = (state=INITIAL_STATE,action) =>{

    switch (action.type) {

        case createElementTypes.ADD_ELEMENT:
            return{
                ...state,
                elements: action.payload
            };

        default: return state
        
    }
};

export default createElementReducer;