import { combineReducers, createStore } from "redux"
import { CPU, RAM, SSD } from "./data.js"



function cpuFunction(state,act){
    return state
}


const store = createStore(combineReducers({cpuFunction}))

export default store;