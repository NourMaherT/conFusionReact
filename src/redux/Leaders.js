import * as ACTION_TYPES from "./ActionTypes"

export const Leaders = (state={
    isLoading:true,
    errMess:null,
    leaders:[]
    },action) =>{
    switch (action.type) {
        case ACTION_TYPES.LEADERS_LOADING:
            return{...state,isLoading:true,errMess:null,leaders:[]}

        case ACTION_TYPES.LEADERS_FAILED:
            return{...state,isLoading:false,errMess:action.payload,leaders:[]}

        case ACTION_TYPES.ADD_LEADERS:  
            return{...state,isLoading:false,errMess:null,leaders:action.payload}


        default:
            return state
    }
}