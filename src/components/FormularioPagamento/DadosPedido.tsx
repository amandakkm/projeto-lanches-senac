import { ItensPedidoProps } from '../../interfaces/ItensPedidoProps';
import "../FormularioPagamento/DadosPedido.css";

function PedidoAccordion({ price, image, total, lanche, qtd }: ItensPedidoProps) {
    return (
        <div className="card-body-ped">
             <div className='imagem'>
                <img src={image} className="product-card__image"/>
            </div>
        <div className='dado-produto'>
            <p className='produto-item'>Produto: {lanche}</p>
            <p>Quantidade: {qtd}</p>
            <p>Preço: R${price}</p>
            <p>Total: R${price * qtd}</p>
        </div>
        </div>
    );
}

export default PedidoAccordion;