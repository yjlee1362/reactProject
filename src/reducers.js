import { combineReducers, createStore } from "redux"
import { CPU, RAM, SSD } from "./data.js"

const CPUs = CPU;

const everyThing = [...CPU,...RAM,...SSD];

const cntArray =  everyThing.sort((a,b)=>{return b.cnt - a.cnt});

const emptyArray = [];


function recommendList (state = everyThing,act){
if(act.type === "cnt++"){
    
    const plusArray = [...state];
    console.log(plusArray)
    console.log(act.payload)
    
    return plusArray
} 
    return cntArray

}

function cpuFunction(state = CPUs,act){
    return state
}

function cartList (state = emptyArray,act){
    if(act.type === 'addCart'){
        const copyArray = [...state];
        copyArray.push(act.payload)
        return copyArray        
    }
  return state  
}


const store = createStore(combineReducers({cpuFunction,recommendList,cartList}))

export default store;