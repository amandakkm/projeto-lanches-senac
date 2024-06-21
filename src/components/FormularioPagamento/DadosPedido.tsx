import Accordion from 'react-bootstrap/Accordion';
import { ItensPedidoProps } from '../../interfaces/ItensPedidoProps';

function PedidoAccordion({ price, image, total, lanche }: ItensPedidoProps) {
    return (
        <Accordion>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Itens do pedido</Accordion.Header>
                <Accordion.Body>
                    <strong>{lanche}</strong>
                    <p>Preço.....................{price}</p>
                    <div className='imagem'>
                        <img src={image} className="product-card__image"/>
                    </div>
                    <strong>Total: R$ {total}</strong>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default PedidoAccordion;