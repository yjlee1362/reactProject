import { combineReducers, createStore } from "redux"
import { CPU, RAM, SSD } from "./data.js"

const CPUs = CPU;

const everyThing = [...CPU,...RAM,...SSD];

const cntArray =  everyThing.sort((a,b)=>{return a.cnt - b.cnt})

function recommendList (state = cntArray,act){
if(act === "cnt++"){
    const plusArray = [...cntArray];
    plusArray[act.payload].cnt++
    return plusArray
} 
    return cntArray

}

function cpuFunction(state = CPUs,act){
    return state
}


const store = createStore(combineReducers({cpuFunction,recommendList}))

export default store;