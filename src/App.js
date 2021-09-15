import React from 'react';
import './App.css';
import Filtro from './components/filtro/filtro.js';
import Carrinho from './components/carrinho/carrinho.js';
import styled from 'styled-components';

const LayoutItens = styled.div `
  display: flex;
  justify-content: space-between;
`



function App() {
  return (
    <LayoutItens>
      <Filtro />

      <Carrinho />

    </LayoutItens>
  );
}

export default App;
