import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    border: solid black 1px;
    height: 500px;
    width: 240px;
    padding-left: 20px;
    margin: 15px;
    display: flex;
    flex-direction: column;
`

export function Filtro(props) {
    return <ContainerFiltro>

        <h2>Filtros</h2>

        <label>Valor mínimo</label>
        <input
            type='number'
            placeholder="Valor mínimo"
            min='0'
            max='infinite'
            value={props.valorMinimoInput}
            onChange={props.atualizaCampoValorMinimo}
        />

        <label>Valor máximo</label>
        <input
            type='number'
            placeholder="Valor máximo"
            min='0'
            max='infinite'
            value={props.valorMaximoInput}
            onChange={props.atualizaCampoValorMaximo}
        />

        <label>Buscar por palavra</label>
        <input
            value={props.valorPesquisaInput}
            onChange={props.atualizaCampoBusca}
            type='text'
            placeholder="Digite a palavra"
        />
    </ContainerFiltro>
}

export default Filtro;