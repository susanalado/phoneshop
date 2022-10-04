import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import { Link } from "react-router-dom";

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div className="details">
            <div className="miniature">
                <img src={thisProduct.img} alt=""></img>
            </div>
            <div>
                <div className="description">
                    <h1>{thisProduct.name}</h1>
                    <h3>Description</h3>
                    <p>Brand: {thisProduct.brand}</p>
                    <p>Price: ${thisProduct.price}</p>
                </div>
                <div className="actions">
                    
                    <Link to={`/buyPage/${thisProduct.id}`}><button className="buy">Buy</button></Link>
                    <Link to="/"><button>Continue shopping</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail