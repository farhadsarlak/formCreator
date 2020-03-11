import createElementTypes from './createElementTypes';


const AddElement = element =>({
   type: createElementTypes.ADD_ELEMENT,
   payload: element
});