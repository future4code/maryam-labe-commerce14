import React from 'react';
import styled from 'styled-components';
import BotaoCarrinho from './produto-carrinho';
// import TituloInput from './inputs';

const ContainerCarrinho = styled.div`
    border: solid black 1px;
    height: 500px;
    width: 240px;
    padding-right: 10px;
    padding-left: 10px;
    margin: 15px;
`

class Carrinho extends React.Component {
    render() {
        return (
        <ContainerCarrinho>
            <h2>Carrinho:</h2>
            <BotaoCarrinho />
            <hr />
            <p>Valor total: R$</p>
        </ContainerCarrinho>
        )
    }

}

export default Carrinho;