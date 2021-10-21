// export const InitailFeedback ={
//     firstname:"",
//     lastname:"",
//     telnum:"",
//     email:"",
//     agree:false,
//     contactType:"Tel.",
//     message:""
// }

import * as ActionTypes from "./ActionTypes"

export const Forms= (state={
    errMess:null,
    feedback:[]}
    ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return{...state, feedback:state.feedback.concat(action.payload)}
    
        default:
            return state
    }
}