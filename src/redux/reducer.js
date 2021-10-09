import { DISHES } from '../shared/DISHES';
import {PROMOTIONS} from "../shared/PROMOTIONS"
import {LEADERS} from "../shared/LEADERS"
import {COMMENTS} from "../shared/COMMENTS"

export const initialState={
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
}

export const Reducer =(state =initialState,action) =>{
    return state
}