import React from "react";
import { useSelector , useDispatch, connect } from "react-redux";
import styled from "styled-components";
import {ListGroup ,ListGroupItem} from "react-bootstrap"


function Cart(props) {

    const cpu = useSelector((state) => { return state });
    console.log(cpu)
    const Bigdiv = styled.div`
    
display : flex;
position : relative;
    width : 100%;
    border-style: solid;
    width :  1200px;
    height : 600px;`;

    const RightDiv = styled.div`
border-style: solid;
color : black;
width 300px;
height : 600px;
overflow: auto;`;

    const LeftDiv = styled.div`
border-style: solid;
color : black;
width :900px;
height : 600px;`;

    return (
        <div>
            <Bigdiv>
                <RightDiv>
                    <div>
                        체크박스넣을거임 그 열거형함수로 써볼까함.
                    </div>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item><ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item><ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item><ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item><ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                </RightDiv>
                <LeftDiv>
                    <ListGroup>                
                    <SellList></SellList>
                </ListGroup>
                </LeftDiv>
            </Bigdiv>


        </div>
    )

}

function SellList(props){
    const cpu = useSelector((state) => { return state });
    const arraycpu = cpu.cpuFunction
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



export default Cart;