import { getData } from "../../firebase/firebase-services";
import { useEffect, useState } from "react";
import './content-product.css';
import Navbar from "../navBar/navBar";
import CardProduct from "./card-product";

function ContentProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const products = getData("products");
        products.then(function (result) {
            setProducts(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        });
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className="content--product">
                <div className="content--product--fill">
                    <div className="filtros">

                        <input className="filtros--search" placeholder="Pesquise aqui..."></input>
                        <div className="filtros--select">
                            <select className="filtros--select-select" name="ordenar">
                                <option value="valor1">Valor 0</option>
                                <option value="valor2">Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>
                            <select className="filtros--select-select" name="ordernar_2">
                                <option value="valor1">Valor 1</option>
                                <option value="valor2">Valor 2</option>
                                <option value="valor3">Valor 3</option>
                            </select>

                        </div>
                    </div>
                </div>
                <div className="content--list--product">
                    {products.map((event) => {
                        return (
                            <CardProduct key={event.id} id={event.id}  title={event.name} img={event.image} price={event.price}></CardProduct>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default ContentProduct;