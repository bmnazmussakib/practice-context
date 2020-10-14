import React from 'react';

const Shipment = (props) => {
    const shipmentStyle = {
        color: 'blue',
        border: '1px solid blue',
        padding: '30px',
        margin: '30px'
    }
    return (
        <div style={shipmentStyle}>
            <h1>This is shipment: {props.count}</h1>
            <h3>Child of ProductDetails</h3>
        </div>
    );
};

export default Shipment;