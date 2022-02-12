import { combineReducers, createStore } from "redux"
import { CPU, RAM, SSD } from "./data.js"

const CPUs = CPU;

const everyThing = [...CPU,...RAM,...SSD];

const cntArray =  everyThing.sort((a,b)=>{return b.cnt - a.cnt});

const emptyArray = [];


function recommendList (state = everyThing,act){
if(act.type === "cnt++"){
    
    const plusArray = [...state];
    plusArray[act.payload].cnt++;
    const recommendList = plusArray.sort(((a,b)=>{return b.cnt - a.cnt}))
    const fList = recommendList.sort((a,b)=>{return a.id-b.id})
    
    return fList
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

function choicedList(state=[],act){

if(act.type==='addchoicedList'){
    const copyState = [...state];
    copyState.push(act.payload);
    //같은 종류는 1개씩만 들어갈 수 있도록 하기 배열요소중 겹치는거 제외하는식으로 하기
    console.log(copyState)
    return copyState
}   else {return state}

}



//댓글달기 기능을 스테이트랑 배열에 push하고 그걸 랜더링하는걸로 구현해보기
//별점이랑 좋아요도 한번


const store = createStore(combineReducers({cpuFunction,recommendList,cartList,choicedList}))

export default store;