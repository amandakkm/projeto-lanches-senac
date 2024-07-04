import { useEffect, useState } from 'react';
import { DadosLoginProps } from '../../interfaces/DadosLoginProps';
import "../FormularioPagamento/DadosLogin.css";
import { fetchUser } from '../../services/UsuarioAPI';

function LoginAccordion({ name, endereco, telefone }: DadosLoginProps) {
    const [user, setUserData] = useState<string| null>(null);

    useEffect(() => {
            const idString = localStorage.getItem("userId");
            const idUser = idString ? parseInt(idString, 10) : null;
        
            if (idUser !== null && !isNaN(idUser)) {
                fetchUser(idUser).then((response) => {
                    console.log(response.data.nome)
                    setUserData(response.data.nome)
                }).catch((error) => {
                    console.error("Error fetching user:", error);
                });
            } else {
                console.error("Invalid user ID:", idString);
            }
    }), [];
    
    return (
       
            <div className="card-body-log">
                <strong>Nome: {user}</strong>
                <p>Telefone: {telefone}</p>
                <p>Endereço: {endereco}</p>
            </div>
        
    );
}


export default LoginAccordion;