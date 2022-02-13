
import React from "react";
import { useSelector , useDispatch, connect } from "react-redux";
import styled from "styled-components";
import {ListGroup ,ListGroupItem} from "react-bootstrap"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



function Assembly(props){

    return(<div>
        <Cart/>
            <RadioBox></RadioBox>
            <ChoicedArea/>
    </div>

    )
};

function RadioBox(props){
    const Radios = styled.div`
    width :300px;
    margin : auto;
    `

    return(<Radios>
        <input type='radio' id='radio1' name="test" />테스트1
        <input type='radio' id='radio2' name="test"/>테스트2
        <input type='radio' id='radio3' name="test"/>테스트3
        <br/>
        <input type='radio' id='radio1' name="test1" />테스트1
        <input type='radio' id='radio2' name="test1"/>테스트2
        <input type='radio' id='radio3' name="test1"/>테스트3
        {/* 라디오박스 좀 많이넣을까?싶다. 하나로 map함수쓰기에는 뭔가 많이 애매하다. */}

    </Radios>
    // function App() {
    //     const subject2 = 'info'
      
    //     return (
    //      <div className="App">
    //        {
    //          {
    //             info: <p>상품정보</p>,
    //             shipping: <p>배송관련</p>,
    //             refund: <p>환불약관</p>
    //           }[subject2]
    //         }
            
    //       }
    //       </div>
    //       )
    //   }

    )
};

function ChoiceArea(props){
    return(
        <div>
            라디오에서 선택된 값에 따라서 보여주는게 다르게 설정하기 state쓰면 될듯
            맨밑에 메모해둔걸로 짜면 될거같다.
        </div>
    )

}

function ChoicedArea(props){

    const cpu = useSelector((state) => { return state });

let Grouped = styled.div`
width :500px;
margin : auto;`

    return(
        <Grouped>
            
        <ListGroup>
        {cpu.recommendList.title}
        </ListGroup>
        </Grouped>
    )
}

// state 를 만들고   = { 
//     ram : <p>상품정보</p>,
//     cpu : <cpudiv></cpudiv>, 뭐 대충 이런식으로 
//     refund : <p>환불약관</p>
//   }
  
//   function Component() {
//     var 현재상태 = 'info';
//     return (
//       <div>
//         {
//           탭UI[현재상태] 여기를 state변경하는식으로 라디오박스를 바꿔줄 수 있는게 좋겟다.
//         }
//       </div>
//     )
//   } 




function Cart(props) {

    const cpu = useSelector((state) => { return state });
    
    const history = useHistory();

    const disPatch = useDispatch();

    const Bigdiv = styled.div`
    
    
    
display : flex;
position : relative;
    width : 100%;
    border-style: solid;
    width :  1200px;
    height : 600px;`;

    const LeftDiv = styled.div`
border-style: solid;
color : black;
width 900px;
height : 600px;
overflow: auto;`;

    const RightDiv = styled.div`
border-style: solid;
color : black;
width :900px;
height : 600px;`;

    return (
        <div>
            <Bigdiv>
                <LeftDiv>
                    <div>
                        체크박스넣을거임 그 열거형함수로 써볼까함.<br/>
                        밑에있는건 이제 css로 조정하기
                    </div>
                <ListGroup>
                <SellList></SellList>
                    
                </ListGroup>
                </LeftDiv>
                <RightDiv>
                    <span>여기다가는 선택된 state랑 누르면 왼쪽께 바뀌도록</span>
                {cpu.choicedList.map((a,i)=>{return(
                    <div>{a.title}</div>
                )})}  
                <button onClick={()=>{disPatch({type:'orderCart'});history.push('/order')}}>조립끝 사러가기</button>
                </RightDiv>
            </Bigdiv>


        </div>
    )

}

function SellList(props){
    const cpu = useSelector((state) => { return state });
    const disPatch = useDispatch()

    const arraycpu = cpu.cpuFunction
    const history = useHistory();

    const SellListDiv = styled.div`
    
    `

    return(
        <div>
            {arraycpu.map((a,i)=>{return(<ListGroup.Item key ={i}>
                <tr >
                    <td colSpan={2} rowSpan={2}><img src={arraycpu[i].imgl}></img></td>
                    
                    <td>{arraycpu[i].price}원</td>
                    <td><button onClick={()=>{{history.push(`/detail/${a.id}`)}}}>자세히보기</button></td>
                </tr>
                <tr>
                    
                    
                    <td as={Link} to={`/detail/${a.id}`}>{arraycpu[i].title}</td>
                    <td><button onClick={()=>{disPatch({type:'addchoicedList',payload:a})}}>담기</button></td>
                </tr>
                
                
                </ListGroup.Item>
            )})}
        </div>
    )
//뭐 보여줄지는 여기서 고르는데 스테이트를 변경하는 방법으로 뭘보여줄건지 바꿀예정
}

export default Assembly;