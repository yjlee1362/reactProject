import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


function DetailComponent(props) {
    const state = useSelector((state) => { return state });
    const disPatch = useDispatch();
    const { id } = useParams();
    console.log(id)
    useEffect(()=>{
        disPatch({type:"cnt++",payload:id})
    },[])

  
    const history = useHistory();


   
    

    


    return (
        <div>
            <span>여기는 상세페이지니까 사진이랑 주요 데이터(스펙) 그리고 카트에 담기랑 즉시주문하기를 한번</span>
            <span>그리고 비교할 만한 상품을 몇개 밑쪽에 넣는식으로 하자 </span>
            <span>종목별로 해야하나 조금 고민되긴한다.</span>
            <button onClick={()=>{history.goBack();}}>이전페이지 </button>

            <div>
                비교할 상품들 몇개
                {state.recommendList.map((a, i) => { return (<span>{a.clock}클럭</span>) })}
            </div>

        </div>
    )
}

export default DetailComponent