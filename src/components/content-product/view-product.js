import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navBar/navBar";
import { getUnicaData } from "../../firebase/firebase-services";
import { useEffect, useState } from "react";
import './view-product.css';

export default function ViewProduct(){
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
       const product = getUnicaData(params.id);
        product.then(function(result) {
            setProduct(result.data());
        })
       
    },[]);
    return(
        <>
            <Navbar></Navbar>
            <div className="productContent">
                <div className="productContent--area--image">
                    <img src={product.image} alt="Image"></img>
                </div>
                <div className="productContent--area--info">
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                </div>
            </div>
            
        </>
    );
}