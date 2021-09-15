import React from 'react';
import styled from 'styled-components';

const TextoTituloInput = styled.p `
    margin: 1px;
`

const ContainerInput = styled.div `
    margin-bottom: 20px;
`

const ValorInput = styled.input `
    width: 200px;
`

function TituloInputValor(props){
    return (
        <ContainerInput >
            <TextoTituloInput>{props.texto}</TextoTituloInput>
            <ValorInput type='number' id="quantity" name="quantity" min='0' max='infinity'/>
        </ContainerInput >
    )
}
function TituloInputPesquisa(props){
    return (
        <ContainerInput >
            <TextoTituloInput>{props.texto}</TextoTituloInput>
            <ValorInput type='text'/>
        </ContainerInput >
    )
}

export { TituloInputValor, TituloInputPesquisa};
