import './LancheCard.css';
import { ProductCardProps } from "../../interfaces/ProductCardProps";
import { Button } from 'react-bootstrap';

export function LancheCard({image, description, whereToGo, cardTitle, price}: ProductCardProps) {
    const quant = 0
    return (
        <>
            <div  className="card card-extra-styles">
                <h2 className="card-title">{cardTitle}</h2>
                <img src={image} className="product-card__image" alt={cardTitle} />
                <div className="card-body">
                    <p className="card-text-description">{description}</p>
                    <p className="card-text-price">{price}</p>
                    <button className="btn btn-primary">{whereToGo}</button>
                </div>
                <div className="mt-auto">
                    {quant === 0 ? (
                        <Button className='w-100'>+Adicionar</Button>
                    ): 
                    <div className='d-flex align-items-center flex-column' style={{ gap: "0.5rem"}}>
                        <Button>-</Button>
                        <div>
                            <span className='fs-3'>{quant}</span>
                            adicionado
                        </div>
                        <Button>+</Button>
                        <div className='d-flex align-items-center flex-column' style={{ gap: "0.5rem"}}>
                            Bye
                        </div>
                    </div>}
                </div>
            </div>          
        </>
    );
};