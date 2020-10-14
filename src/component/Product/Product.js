import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';

const Product = (props) => {
    const productStyle = {
        color: 'green',
        border: '1px solid green',
        padding: '30px',
        margin: '30px'
    }
    return (
        <div style={productStyle}>
            <h1>This is product: {props.count}</h1>
            <h3>Child of Home</h3>
            <ProductDetails count={props.count}></ProductDetails>
            
        </div>
    );
};

export default Product;