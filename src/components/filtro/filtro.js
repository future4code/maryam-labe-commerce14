import React from 'react';
import styled from 'styled-components';
// import TituloInputPesquisa from './inputs';
// import TituloInputValor from './inputs';
import { TituloInputValor, TituloInputPesquisa } from './inputs';

const ContainerFiltro = styled.div`
    border: solid black 1px;
    height: 500px;
    width: 240px;
    padding-left: 20px;
    margin: 15px;
`

class Filtro extends React.Component {
    render() {
        return (
        <ContainerFiltro>
            <h2>Filtros</h2>
            <TituloInputValor texto={"Valor mínimo:"} />
            <TituloInputValor texto={"Valor máximo:"}/>
            <TituloInputPesquisa texto={"Busca por nome:"}/>
        </ContainerFiltro>
        )
    }

}

export default Filtro;