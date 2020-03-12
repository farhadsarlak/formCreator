import {createContext} from "react";

const adminContextApi = createContext({
    state:{},
    handlePaginationChange:()=>{},
    getPageData : () => {},

});


export default adminContextApi;