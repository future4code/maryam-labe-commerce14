import React from 'react';
import styled from 'styled-components';
import ProdutoCarrinho from './produto-carrinho';
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
    state= {
        // produtos: [
        //     {}
        // ]
        valorTotal: '0,00',

    }
    render() {
        return (
        <ContainerCarrinho>
            <h2>Carrinho:</h2>
            <ProdutoCarrinho />
            <hr />
            <p>Valor total: R$ {this.state.valorTotal}</p>
        </ContainerCarrinho>
        )
    }

}

export default Carrinho;