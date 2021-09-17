import React from 'react';
import styled from 'styled-components';


const ContainerInput = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

function ProdutoCarrinho(props){
    return (
        <ContainerInput >
            <p>1x</p>
            <p>Produto 3</p>
            <button /*onClick={função de remover item}*/>Remover</button>
        </ContainerInput >
    )
}

export default ProdutoCarrinho;