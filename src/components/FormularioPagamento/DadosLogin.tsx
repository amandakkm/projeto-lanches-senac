import { DadosLoginProps } from '../../interfaces/DadosLoginProps';
import Accordion from 'react-bootstrap/Accordion';

function LoginAccordion({ name, endereco, telefone }: DadosLoginProps) {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Meus dados</Accordion.Header>
                <Accordion.Body>
                    <strong>Nome: {name}</strong>
                    <p>Telefone: {telefone}</p>
                    <p>Endereço: {endereco}</p>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default LoginAccordion;