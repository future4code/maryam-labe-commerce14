import React from "react";
import Itens from "./components/carrinho/itens.js";

class Carrinho extends React.Component {
    render() {
        const itensDoCarrinho =
            this.props.carrinho &&
            this.props.carrinho.map((item) => {
                return (
                    <Itens
                        key={item.id}
                        quantidade={item.quantidade}
                        nome={item.name}
                        onClick={() => this.props.removerItemDoCarrinho(item)}
                    />
                );
            });

        return (
            <ConjuntoDoCarrinho>
                <h2>Carrinho:</h2>
                <div>{itensDoCarrinho}</div>
                <p>Valor total: R$ {this.props.valorTotal},00</p>
            </ConjuntoDoCarrinho>
        );
    }
}

export default Carrinho;
