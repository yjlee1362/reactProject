import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';


function DetailComponent(props) {
    const state = useSelector((state) => { return state });
    const disPatch = useDispatch();
    const { id } = useParams();

    const [compare, compareChange] = useState(true);



    useEffect(() => {
        disPatch({ type: "cnt++", payload: id })
    }, [])


    const history = useHistory();








    return (
        <div>
            <span>제품명 :{state.recommendList[id].title}</span>
            <img src={state.recommendList[id].imgl} />
            <span>가격 : {state.recommendList[id].price}</span>
            <div style={{ marginLeft: '15px', marginRight: '15px', padding: '10px' }}>
                <button onClick={() => { history.goBack(); }}>이전페이지 </button>
                <button onClick={() => { compareChange(!compare) }}>비교상품보기</button>
            </div>

            {compare ? <Compare /> : null}




        </div>
    )
}

function Compare(props) {

    const state = useSelector((state) => { return state });
    const arraycpu = state.cpuFunction;
    const disPatch = useDispatch()
const history = useHistory();

    return (<>
        {state.cpuFunction.map((a, i) => {
                return (<ListGroup.Item key={i}>
                    <tr >
                        <td colSpan={2} rowSpan={2}><img src={arraycpu[i].imgl}></img></td>

                        <td>{arraycpu[i].price}원</td>
                        <td><button onClick={() => { { history.push(`/detail/${a.id}`) } }}>자세히보기</button></td>
                    </tr>
                    <tr>


                        <td as={Link} to={`/detail/${a.id}`}>{arraycpu[i].title}</td>
                        <td><button onClick={() => { disPatch({ type: 'addchoicedList', payload: a }) }}>담기</button></td>
                    </tr>


                </ListGroup.Item>)
            }
            )
        }
        </>
    )
}













function Commnet(props) {

    const state = useSelector((state)=>{return state});
    const commentState = state.comment

    //div여러개로스테이트로 구성하기. 버튼도 하나(댓글달기)
    //별점넣는것도 구상하기.
    return (
        <div>

        </div>
    )
}


export default DetailComponent