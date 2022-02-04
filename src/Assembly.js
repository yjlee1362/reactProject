
import React from "react";
import { useSelector , useDispatch, connect } from "react-redux";
import styled from "styled-components";
import {ListGroup ,ListGroupItem} from "react-bootstrap"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



function Assembly(props){

    return(<div>
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

let Grouped = styled.div`
width :500px;
margin : auto;`

    return(
        <Grouped>
        <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
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

export default Assembly;


function Cart(props) {

    const cpu = useSelector((state) => { return state });
    
    const history = useHistory();

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
width 600px;
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
                        체크박스넣을거임 그 열거형함수로 써볼까함.
                    </div>
                <ListGroup>
                <SellList></SellList>
                    
                </ListGroup>
                </LeftDiv>
                <RightDiv>
                    <ListGroup>                
                   
                </ListGroup>
                </RightDiv>
            </Bigdiv>


        </div>
    )

}

function SellList(props){
    const cpu = useSelector((state) => { return state });
    const arraycpu = cpu.cpuFunction

    const SellListDiv = styled.div`
    
    `

    return(
        <div>
            {arraycpu.map((a,i)=>{return(<ListGroup.Item key ={i}>
                <div>
                <span>{arraycpu[i].title}</span>
                </div>
                </ListGroup.Item>
            )})}
        </div>
    )
//뭐 보여줄지는 여기서 고르는데 스테이트를 변경하는 방법으로 뭘보여줄건지 바꿀예정
}
