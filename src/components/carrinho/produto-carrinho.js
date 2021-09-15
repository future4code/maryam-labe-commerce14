import React from 'react';
import styled from 'styled-components';

const TextoTituloInput = styled.p `
    margin: 1px;
`

const ContainerInput = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function BotaoCarrinho(props){
    return (
        <ContainerInput >
            <p>1x</p>
            <p>Produto 3</p>
            <button>Remover</button>
        </ContainerInput >
    )
}

export default BotaoCarrinho;