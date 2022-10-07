import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function ProductDetail(props) {
    const {productId} = useParams()
    const [thisProduct, setProduct] = useState({});

    useEffect(() => {
        fetch(`/api/product/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setImgSrc(data.imgUrl);
                setModelValue(data.options.colors[0].code);
                setMemoryValue(data.options.storages[0].code);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [productId]);

    //Hooks to set state
    const [valueKey, setModelValue] = React.useState(1);
    const [memoryKey, setMemoryValue] = React.useState(1);
    const [imgSrc, setImgSrc] = React.useState(thisProduct.imgUrl);

    const handleModelChange = (event) => {
        const newModelValue = (Number(event.target.value));
        setModelValue(newModelValue);

        // TIP: Code I provided in case the options for color of the product also provided images!
        
        //const newModel = thisProduct.colors.find(color => color.key === newModelValue);
        //if (newModel !== undefined && newModel.img !== undefined)
        //    setImgSrc(newModel.img)
    };

    const colors = thisProduct.options?.colors?.map(color => {
        return (
            <FormControlLabel 
            checked={color.code===valueKey} 
            key={color.code}
            value={color.code} control={<Radio />} 
            onChange={handleModelChange} 
            label={color.name} />
    )});

    const handleMemoryChange = (event) => {
        const newMemoryValue = (Number(event.target.value));
        setMemoryValue(newMemoryValue);
    };

    const memories = thisProduct.options?.storages?.map(memory => {
        return (
            <FormControlLabel 
            checked={memory.code===memoryKey} 
            key={memory.code}
            value={memory.code} control={<Radio />} 
            onChange={handleMemoryChange} 
            label={memory.name} />
    )});

    const handleBuy = () => {
        const phone ={
            id: 1,//thisProduct.id,
            colorCode: valueKey,
            storageCode: memoryKey
        }
        
        fetch(`/api/cart/`, {
          method: 'POST', 
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json' },
          body: JSON.stringify(phone) 
        }).then(function(response){ return response.json(); })
        .then(function(data) {
            props.addToCart(data.count);
        })
    };

    const productAttribute = (atributeName, atribute) => {
        if (atribute !== undefined) 
        return <p><b>{atributeName}:</b> {atribute}</p>
        else return undefined
    }

    const product = () => {
        return (
            <>
            <div className="description">
                <h1>{thisProduct.name}</h1>
                <h3><b>Description</b></h3>
                {productAttribute('Brand',thisProduct.brand)}
                {productAttribute('Model',thisProduct.model)}
                {productAttribute('CPU',thisProduct.cpu)}
                {productAttribute('RAM',thisProduct.ram)}
                {productAttribute('OS',thisProduct.os)}
                {productAttribute('Resolution',thisProduct.resolution)}
                {productAttribute('Battery',thisProduct.battery)}
                {productAttribute('Camera',thisProduct.camera)}
                {productAttribute('Dimensions',thisProduct.dimentions)}
                {productAttribute('Weight',thisProduct.weight)}
                <hr></hr>
                <p><b>Price: ${thisProduct.price}</b></p>
            </div>
            <div className="models">
                <FormControl>
                    <FormLabel className="model" id="color-group-label"><b>Color options</b></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="color-group-label"
                        defaultValue={thisProduct.color}
                        name="color-radio-buttons-group"
                    >
                        {colors}
                    </RadioGroup>
                </FormControl>
            </div><div className="models">
                <FormControl>
                    <FormLabel className="model" id="memory-group-label"><b>Storage</b></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="memory-group-label"
                        defaultValue={thisProduct.memory}
                        name="memory-radio-buttons-group"
                    >
                        {memories}
                    </RadioGroup>
                </FormControl>
            </div><div className="actions">
                <button className="buy" onClick={handleBuy}>
                    Add to cart
                </button>
                <Link to="/"><button>Continue shopping</button></Link>
            </div>
            </>
        );
    };

    return (
        <div className="details">
            <div className="miniature">
                <img src={imgSrc} alt=""></img>
            </div>
            <div>
                {product()}
            </div>
        </div>
    )
}

export default ProductDetail