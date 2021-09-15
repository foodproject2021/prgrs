import React from 'react';
import './bootstrap.min.css'
import Nav from './Nav';
import Footer from './Footer';
import products from './products'
import Product from './Product';
import {Row, Col} from 'react-bootstrap';

function Home(){

    return  <div >
        <Nav />
        <main style={{minHeight: "80vh"}} >
            <Row className="m-1 mt-2 ms-4">
                {
                    products.map(itm=>(
                        <Col key={itm._id} sm={12} md={6} lg={4} xl={3}>
                            <Product item = {itm} />
                        </Col>
                    ))
                }
            </Row>
        </main>
        <Footer />
    </div>
}

export default Home;