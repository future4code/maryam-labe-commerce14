import React from 'react';
import styled from 'styled-components';



const CardContainer = styled.div `
    border: solid black 1px;
    width: 200px;
    height: 250px;
    text-align: center;
    margin: 10px;
`

const Camisa = styled.img `
    width: 200px;
    height: 150px;
    text-align: center;
`


function Card(props){

        return (
            <CardContainer>
                <Camisa src={props.imagem} />
                <p>{props.nome}</p>
                <p>R$ {props.preco}</p>
                <button type="button" onClick={props.addCarrinho}>Adicionar ao carrinho</button>

            </CardContainer>
        )
}

export default Card;