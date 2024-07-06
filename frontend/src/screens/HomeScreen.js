import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
const HomeScreen = () => {
    const products =[{
        _id: '1',
        name: 'Nike Air Force 1',
        price:100,
        image:'https://placehold.co/400',
        rating: 1,
        numReviews: 10,
    },
    {
        _id: '2',
        name: 'Nike Air Max 97',
        price:150,
        image:'https://placehold.co/400',
        rating: 4.5,
        numReviews: 1,

    },
    {
        _id: '3',
        name: 'Nike Air Max 270',
        price:200,
        image:'https://placehold.co/400',
        rating: 3,
        numReviews: 12,
    },
    {
        _id: '4',
        name: 'Nike Air Max 720',
        price:250,
        image:'https://placehold.co/400',
        rating: 4.5,
        numReviews: 14,
    },
    {
        _id: '5',
        name: 'Nike Air Max 270 React',
        price:300,
        image:'https://placehold.co/400',
        rating: 4.0,
        numReviews: 16,
    },
    {
        _id: '6',
        name: 'Nike Air Max 270 React',
        price:300,
        image:'https://placehold.co/400',
        rating: 4.2,
        numReviews: 18,
    }
]
  return (
    <>
        <h1>Lastest Product</h1>
        <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
            </Col>
        ))}    
        </Row>
    </>
  )
}

export default HomeScreen
