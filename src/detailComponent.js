import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


function DetailComponent(props) {
    const state = useSelector((state) => { return state });
    const disPatch = useDispatch();
    const { id } = useParams();

    const [compare,compareChange] = useState(true);



    useEffect(() => {
        disPatch({ type: "cnt++", payload: id })
    }, [])


    const history = useHistory();








    return (
        <div>
            <span>제품명 :{state.recommendList[id].title}</span>
            <img src={state.recommendList[id].imgl} />
            <span>가격 : {state.recommendList[id].price}</span>
            <div style={{marginLeft : '15px',marginRight:'15px' ,padding:'10px'}}>
            <button onClick={() => { history.goBack(); }}>이전페이지 </button>
            <button onClick={() => {compareChange(!compare) }}>비교상품보기</button>
            </div>

            {compare? <Compare/>:null}
            

            
       
        </div>
    )
}

function Compare(props){

    const state = useSelector((state) => { return state });

    return(
        <div>
            {state.cpuFunction.map((a, i) => {
                    return (<span>
                        {a.title}<br/></span> )})}

        </div>

    )

}

function Commnet(props){

    //테이블과 스테이트로 구성하기. 버튼도 하나(댓글달기)

    return(
        <div>

        </div>
    )
}


export default DetailComponent