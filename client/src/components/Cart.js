import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function Cart(){
    return  <div>
        <Nav />
        <main style={{minHeight: "80vh"}}>
            <h1>Cart</h1>
        </main>        
        <Footer />
    </div>
}

export default Cart;