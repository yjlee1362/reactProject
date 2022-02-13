import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Order(props){

    const state = useSelector((state)=>{return state})
    const cartList = state.cartList;
    console.log(cartList);
    const TableDiv = styled.div`
    color : red;
    
    `


    return(
        <div>
            {cartList.map((a,i)=>{return(<span>{a.title}<br/></span>)})
            }
        
        </div>
    )
}


export default Order;