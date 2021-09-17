import React from 'react';
import Filtro from './components/filtro/filtro.js';
import styled from 'styled-components';
import ListaDeProdutos from "./components/home/camisas.json";
import FiltrosHome from "./components/home/home-filtros"
import Card from "./components/home/card";
import logo from './components/img/camisa1.jpg'

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
const ContainerCarrinho = styled.div`
    border: solid black 1px;
    height: 500px;
    width: 240px;
    padding-right: 10px;
    padding-left: 10px;
    margin: 15px;
`

class App extends React.Component {
  state = {
    produtos: ListaDeProdutos,
    valorMinimoInput: "",
    valorMaximoInput: "",
    valorPesquisaInput: '',
    ordenacao: "Crescente",
    carrinho: [],
    valorTotalCarrinho: 0,
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

  atualizaOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  addCarrinho = (produto) => { //É chamada quando o botão de add é clicado, e verifica se esse item já existe no carrinho
    const produtoNoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      }else{
        return false
      }
    });

    if (produtoNoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });

      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.adicionarValorTotal(produto.price);
  };

  removerItemDoCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if (item.id !== itemParaRemover.id) {
          return item;
        }else{
          return false
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
  };

  adicionarValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal + valor,
    });
  };

  removerValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal - valor,
    });
  };




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
          return <Card imagem={logo} nome={produto.name} id={produto.id} preco={produto.value} addCarrinho={this.addCarrinho} />
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

          <ContainerCarrinho>
            <h2>Carrinho:</h2>
            <p>{this.state.produtos[1].name}</p>
            <hr />
            <p>Valor total: R$ {this.state.valorTotalCarrinho}</p>
          </ContainerCarrinho>

        </LayoutItens>
      )
    }
  }


export default App;