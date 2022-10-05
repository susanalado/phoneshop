import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"
import { Link } from "react-router-dom";
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';

function ProductDetail(props) {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    //Hooks to set state
    const [valueKey, setModelValue] = React.useState(1);
    const [memoryKey, setMemoryValue] = React.useState(1);
    const [imgSrc, setImgSrc] = React.useState(thisProduct.img);

    const handleModelChange = (event) => {
        const newModelValue = (Number(event.target.value));
        setModelValue(newModelValue);
        const newModel = thisProduct.models.find(model => model.key === newModelValue);
        if (newModel !== undefined && newModel.img !== undefined)
            setImgSrc(newModel.img)
    };

    const models = thisProduct.models.map(model => {
        return (
            <FormControlLabel 
            checked={model.key===valueKey} 
            key={model.key}
            value={model.key} control={<Radio />} 
            onChange={handleModelChange} 
            label={model.name} />
    )});

    const handleMemoryChange = (event) => {
        const newMemoryValue = (Number(event.target.value));
        setMemoryValue(newMemoryValue);
    };

    const memories = thisProduct.memory.map(memory => {
        return (
            <FormControlLabel 
            checked={memory.key===memoryKey} 
            key={memory.key}
            value={memory.key} control={<Radio />} 
            onChange={handleMemoryChange} 
            label={`${memory.value}GB`} />
    )});

    const handleBuy = () => {
        const phone ={
            id: thisProduct.id,
            model: valueKey,
            memory: memoryKey
        }
        
        console.log("Added phone " + phone)
        props.addToCart();
    };

    return (
        <div className="details">
            <div className="miniature">
                <img src={imgSrc} alt=""></img>
            </div>
            <div>
                <div className="description">
                    <h1>{thisProduct.name}</h1>
                    <h3><b>Description</b></h3>
                    <p><b>Brand:</b> {thisProduct.brand}</p>
                    <p><b>CPU:</b> {thisProduct.cpu}</p>
                    <p><b>Memory:</b> {thisProduct.ram}GB</p>
                    <hr></hr>
                    <p><b>Price: ${thisProduct.price}</b></p>
                </div>
                <div className="models">
                <FormControl>
                    <FormLabel className="model" id="model-group-label"><b>Models</b></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="model-group-label"
                        defaultValue={thisProduct.model}
                        name="model-radio-buttons-group"
                    >
                        {models}
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="models">
                <FormControl>
                    <FormLabel className="memory" id="memory-group-label"><b>Memory</b></FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="memory-group-label"
                        defaultValue={thisProduct.memory}
                        name="memory-radio-buttons-group"
                    >
                        {memories}
                    </RadioGroup>
                </FormControl>
                </div>
                <div className="actions">
                    <button className="buy" onClick={handleBuy} >
                        Buy
                    </button>
                    <Link to="/"><button>Continue shopping</button></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail