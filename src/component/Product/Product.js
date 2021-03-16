import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {course_name,images,price,university} = props.info;
    return (
        <div className="product">
            <div>
                <img src={images} alt=""/>
            </div>
            <div className="product-name">
                 <h3>{course_name}</h3>
                 <p>Price:${price}</p>
                 <p>University:{university}</p>
                 <br/>
                 
                 <button className="main-button"
                    onClick={() =>props.handelAddProduct(props.info)}>
                
                     <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;