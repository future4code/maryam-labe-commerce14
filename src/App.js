import React from 'react';
import Filtro from './components/filtro/filtro.js';
import Carrinho from './components/carrinho/carrinho.js';
import styled from 'styled-components';
import ListaDeProdutos from "./components/home/camisas.json";
import FiltrosHome from "./components/home/home-filtros"
import Card from "./components/home/card";

const LayoutItens = styled.div`
  display: flex;
  justify-content: space-between;
`

const Home = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 8fr;
`

const HomeCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`

const HomeFiltros = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`


class App extends React.Component {
  state = {
    produtos: ListaDeProdutos,
    valorMinimoInput: "",
    valorMaximoInput: "",
    valorPesquisaInput: '',
    quantidadeProdutos: ListaDeProdutos.length,
    ordenacao: "Crescente",
  }



  atualizaCampoBusca = (event) => {
    this.setState({ valorPesquisaInput: event.target.value })
  }


  atualizaCampoValorMinimo = (event) => {
    this.setState({ valorMinimoInput: event.target.value })
  }


  atualizaCampoValorMaximo = (event) => {
    this.setState({ valorMaximoInput: event.target.value })
  }

  atualizaOrdenacao  = (event) => {
    this.setState({ ordenacao: event.target.value })
  }




  render() {
    
    const newArray = this.state.produtos
    .filter(produto => {
      return produto.name.toLowerCase().includes(this.state.valorPesquisaInput.toLowerCase())
    })
    .filter(produto => {
      return this.state.valorMinimoInput === "" || produto.value >= this.state.valorMinimoInput
    })
    .filter(produto => {
      return this.state.valorMaximoInput === "" || produto.value <= this.state.valorMaximoInput
    })
    .sort((produtoAtual, proximoProduto) => {
      switch (this.state.ordenacao) {
        case "Ordem alfabética":
          return produtoAtual.name.localeCompare(proximoProduto.name)
        case "Decrescente":
          return proximoProduto.value - produtoAtual.value
        default:
          return produtoAtual.value - proximoProduto.value
      }
    })
    .map(produto => {
      return <Card nome={produto.name} id={produto.id} preco={produto.value} />
    })


    return (
      <LayoutItens>

        <Filtro
        valorMinimoInput={this.state.valorMinimoInput}
        valorMaximoInput={this.state.valorMaximoInput}
        valorPesquisaInput={this.state.valorPesquisaInput}
        atualizaCampoValorMinimo={this.atualizaCampoValorMinimo}
        atualizaCampoValorMaximo={this.atualizaCampoValorMaximo}
        atualizaCampoBusca={this.atualizaCampoBusca}
        />

        <Home>

          <FiltrosHome 
            quantidadeProdutos={newArray.length} 
            ordenacao={this.state.ordenacao} 
            atualizaOrdenacao={this.atualizaOrdenacao} 
          />
          <HomeCards>
            {newArray}
          </HomeCards>
        </Home>

        <Carrinho />

      </LayoutItens>
    )
  }
}


export default App;