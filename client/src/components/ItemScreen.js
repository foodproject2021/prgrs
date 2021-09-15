import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import Nav from './Nav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import products from './products'
import veg from '../assets/veg.png'
import nonVeg from '../assets/nonveg.png'

const ItemScreen = ({match}) => {

    let item = products.find((p)=> String(p._id) === String(match.params.id))

    return (
        <>
            <Nav />
            <div className="text-start mt-3 ms-4">
                &nbsp;<Link to='/home'><button style={{color:"white", backgroundColor:"black", border:"1px solid black"}}  >Go Back</button></Link><br/>
            </div>
            <div className="text-start mt-3 ms-3">
            <Container fluid={true}>
                <Row>
                    <Col sm={12} md={6} lg={4} >
                        <img src={item.img}  style={{width:"250px", height:"200px"}} className="mt-2" alt={item.itemName} />
                    </Col>
                    <Col sm={12} md={6}>
                        <h3>{item.itemName}</h3>
                        <h5>from {item.rest_name}</h5>
                        <p>{item.itemDesc}</p>
                        <h3>{item.isVeg===true 
                        ? <img src={veg} style={{width:"15px", height:"15px",marginBottom:"5px"}} alt="veg" />
                        : <img src={nonVeg} style={{width:"15px", height:"15px",marginBottom:"5px"}} alt="non veg" />}&emsp;₹{item.itemPrice}&emsp;</h3><br/>
                        <button className="btn btn-success text-light mb-3" >Add to Cart</button><br/>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default ItemScreen