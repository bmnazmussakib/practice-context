import React from 'react';
import Product from '../Product/Product';

const Home = (props) => {
    const homeStyle = {
        color: 'red',
        border: '1px solid red',
        padding: '30px',
        margin: '30px'
    }
    return (
        <div style={homeStyle}>
            <h1>This is home: {props.count}</h1>
            <h3>Child of App JS</h3>
            <Product count={props.count}></Product>
            
            
        </div>
    );
};

export default Home;