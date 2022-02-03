import React from "react";
import { useSelector } from "react-redux"


function DetailComponent(props){

    // useEffect(
    //     ()=>{요기에서 나온 id에 맞는 항목의 본거 ++

    //     },[]
    // )
    
    const state = useSelector((state)=>{return state});
    console.log(state);
    
    
    
    return(
<div>
    <span>여기는 상세페이지니까 사진이랑 주요 데이터(스펙) 그리고 카트에 담기랑 즉시주문하기를 한번</span>
    <span>그리고 비교할 만한 상품을 몇개 밑쪽에 넣는식으로 하자 </span>
    <span>종목별로 해야하나 조금 고민되긴한다.</span>
    <button>버튼도 몇개 </button>

    <div>
        비교할 상품들 몇개
        {state.recommendList.map((a,i)=>{return(<span>{a.clock}클럭</span>)})}
    </div>

    </div>
)
}

export default DetailComponent