import React from "react";
import styled from "styled-components";

const ContainerFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
`

export function HomeFiltros(props) {
    return <ContainerFiltros>
        <p>Quantidade de produtos: {props.quantidadeProdutos}</p>
        <span>
            <label for="sort">Ordenação: </label>
            <select
                name="sort"
                value={props.ordenacao}
                onChange={props.atualizaOrdenacao}>
                <option>Crescente</option>
                <option>Decrescente</option>
                <option>Ordem alfabética</option>
            </select>
        </span>

    </ContainerFiltros>
}

export default HomeFiltros;