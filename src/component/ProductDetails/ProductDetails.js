import React from 'react';
import Shipment from '../Shipment/Shipment';

const ProductDetails = (props) => {
    const productDetailsStyle = {
        color: 'brown',
        border: '1px solid brown',
        padding: '30px',
        margin: '30px'
    }
    return (
        <div style={productDetailsStyle}>
            <h1>This is product details: {props.count}</h1>
            <h3>Child of Product</h3>
            <Shipment count={props.count}></Shipment>
        </div>
    );
};

export default ProductDetails;