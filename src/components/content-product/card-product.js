import react from "react";
import './card-product.css';
import {useNavigate } from "react-router-dom";

function CardProduct(props) {
    let navigate = useNavigate ();
    function abrirAnuncio(id) {
        navigate("/products/product/"+id);
    }
    return (
        <div className="cardProduct" onClick={()=>abrirAnuncio(props.id)}>
            <div className="cardProduct-content">
                <img className="cardProduct--image" src={props.img} alt="Image"></img>
                <span className="cardProduct--title">{props.title}</span>
                <span className="cardProduct--price">{props.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                {/*<div onClick={() => abrirAnuncio(props.id)} className="cardProduct--button">VISUALIZAR</div>*/}
            </div>
        </div>
    );
}
export default CardProduct;