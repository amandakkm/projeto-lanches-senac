import {useNavigate} from "react-router-dom";
const LoginFake = () => {

    const navigate = useNavigate();

    const navigateToDados = () => {
        localStorage.setItem("userId", "1");
        navigate("/checkout")
    }

    return (

        <>
            <button onClick={navigateToDados}>
                Fácil
            </button>
        </>
    )
}

export default LoginFake;