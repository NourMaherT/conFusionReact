import { createStore ,combineReducers,applyMiddleware } from "redux"
import { createForms } from "react-redux-form"
import {Dishes} from "./Dishes"
import {Comments} from "./Comments"
import {Leaders} from "./Leaders"
import {Promotions} from "./Promotions"
import thunk from "redux-thunk"
import logger from "redux-logger"

export const ConfigureStore =() =>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions
        }),
        applyMiddleware(thunk,logger)
    )
    return store
}