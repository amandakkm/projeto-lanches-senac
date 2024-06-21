import { PaymentProps } from "../../interfaces/PaymentProps";

import Accordion from 'react-bootstrap/Accordion';

function PagamentoAccordion({ qrcode }: PaymentProps) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Pagamento</Accordion.Header>
                <Accordion.Body>
                    <strong>Forma de pagamento: </strong>
                    <p>Opção Pix</p>
                    <div className='imagem'>
                        <img src={qrcode} className="qrcode" />
                    </div>
                    <br />
                    <button type="button" className="btn btn-outline-success">Finalizar Pedido</button>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default PagamentoAccordion;
