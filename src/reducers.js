import { combineReducers, createStore } from "redux"
import { CPU, RAM, SSD, mainBoard, HDD} from "./data.js"

const CPUs = CPU;

const everyThing = [...CPU, ...RAM, ...SSD];

const cntArray = everyThing.sort((a, b) => { return b.cnt - a.cnt });

const emptyArray = [];


function recommendList(state = everyThing, act) {
    if (act.type === "cnt++") {
        const plusArray = [...state];
        plusArray[act.payload].cnt++;
        const recommendList = plusArray.sort(((a, b) => { return b.cnt - a.cnt }))
        const fList = recommendList.sort((a, b) => { return a.id - b.id })

        return fList
    }
    return cntArray

}

function cpuFunction(state = CPUs, act) {
    return state
}
//장바구니에추가
function cartList(state = emptyArray, act) {
    if (act.type === 'addCart') {
        const copyArray = [...state];
        copyArray.push(act.payload);
        return copyArray
    } else if (act.type === 'orderCart') {
        const copyArray = [...state, ...act.payload]
        return copyArray
    }
    else { return state }
}



//조립한거에 추가
function choicedList(state = [], act) {

    if (act.type === 'addchoicedList') {
        const copyArray = [...state];
        const overlapped = copyArray.findIndex((a) => {
            return a.kinds === act.payload.kinds
        })
        if (overlapped != -1) {//해당 항목의 부품이 이미 있다면 교체
            copyArray.splice(overlapped, 1);
            copyArray.push(act.payload);
            return copyArray
        } else {
            copyArray.push(act.payload)
            return copyArray
        }
    }
    return state
}

function comment(state=[],act){
    if(act.type = 'commentAdd'){
        const copyArray = [...state];
        copyArray.push(act.payload);
        return copyArray
    }
return state


}

//용도용에 맞춘 완본체형으로 하나 맞춰두고 거기에 맞춘 형태로 한번 해보기
//ex) choicedList를 만들기 위한 하나의 배열을 만들고 조립으로 이동 후 거기서 요소하나하나바꿔보기


//댓글달기 기능을 스테이트랑 배열에 push하고 그걸 랜더링하는걸로 구현해보기
//별점이랑 좋아요도 한번


const store = createStore(combineReducers({ cpuFunction, recommendList, cartList, choicedList,comment }))

export default store;