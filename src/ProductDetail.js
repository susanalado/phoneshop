import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    
    return (
        <div class="details">
            <div class="miniature">
                <h1>{thisProduct.name}</h1>
                <img src={thisProduct.img} alt=""></img>
            </div>
            <div>
                <div class="description">
                    <p>{thisProduct.description}</p>
                    <p>Price: ${thisProduct.price}</p>
                </div>
                <div class="actions">
                    <button>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail