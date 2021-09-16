import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div `
    border: solid black 1px;
    width: 200px;
    height: 250px;
    text-align: center;
    margin: 10px;
`


function Card(props){
        return (
            <CardContainer>
                {/* <img>{props.link}</img> */}
                <p>{props.nome}</p>
                <p>{props.id}</p>
                <p>R$ {props.preco}</p>
            </CardContainer>
        )
}

export default Card;