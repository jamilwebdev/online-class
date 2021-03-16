//import React, { useState,useEffect } from 'react';
//import React from 'react';
import data from '../../data/data.json';
import { useState,useEffect} from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';


const Shop = () => {
    // const first10 = data.slice(0,11);
    // const [user,setUser] = useState([first10]);
   
   const [user,setUser] = useState([]);
    useEffect(()=>{
      setUser(data);
    },[])

    const [cart, setCart] = useState([]);

    const handelAddProduct = (info)=>{
        console.log('product aded');
        const newCart = [...cart,info];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="user-container">
                
                    { 
                        user.map(info =><Product 
                            handelAddProduct = {handelAddProduct}
                            info = {info} >
                             </Product>)
                    }
                
            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>
            </div>

            
             
        </div>
        
    
     
    );
};

export default Shop;