import LoginAccordion from "../components/FormularioPagamento/DadosLogin";
import PedidoAccordion from "../components/FormularioPagamento/DadosPedido";
import PagamentoAccordion from "../components/FormularioPagamento/DadosPagamento";

const Pagamento = () => {
    return (
      <>
          <LoginAccordion 
          name="Amanda Marcos"
          endereco="Avenida Expedicionário José Pedro Coelho, 1826 
          - Complemento: APTO 301"
          telefone="(48) 98805-1651"/>
          <PedidoAccordion
          lanche="X-tudo"
          price="R$15,90"
          total={15.95}
          image="https://pocket.devrocket.com.br/uploads/cardapios/imagens/8-7a3bb6679b0c059a81092110952acd9921dc0677.png"/>
          <PagamentoAccordion
          qrcode="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.activebarcode.com%2Fcodes%2Fimages%2Fqrcode%2Fqr-code-25x25.png&f=1&nofb=1&ipt=f4c476df895d43ee8356bdc24ba2ba4d66f5ea150d96f8e24ed841479b15ebdc&ipo=images" />
      </>
    );
  };
  export default Pagamento;