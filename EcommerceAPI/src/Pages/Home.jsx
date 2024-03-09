import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Store/Slice/GetProducts';
import { Statuses } from '../Store/Statuses';
import Loader from '../Components/Loader';
import { addToCartAction } from '../Store/Slice/CartSlice';

export default function Home() {

    const [isTextStatus, SetIsTextStatus] = useState(false)

    const { products, status } = useSelector((state) => state.productsReducer)
    const dispactch = useDispatch()

    // console.log("dispactch", dispactch);
    // const [products, setProducts] = useState([]);

    // all fetch products request

    useEffect(() => {
        dispactch(fetchProducts());
    }, [])
    
    // const fetch = async () => {
    //   const response = await axios.get("https://fakestoreapi.com/products")
    //   const data = response.data
    //   setProducts(data)
    // }

    const addToCartHandler = (product) => {
        SetIsTextStatus(true)
        // console.log(products);
        dispactch(addToCartAction(product))
    }

    return (
        <>
            <div className="container cardB d-flex flex-wrap gap-5 align-center justify-content-center my-5">
                {
                    status === Statuses.GET_PRODUCT ? <Loader /> : (
                        products.map((product, idx) => {
                            return (
                                <Card key={idx} style={{ width: '18rem' }}>
                                    <Card.Img variant="top" style={{ height: '20rem' }} src={product.image} />
                                    <Card.Body>
                                        <Card.Title className="clamp-1">{product.title}</Card.Title>
                                        <Card.Text className="clamp-3">{product.description}</Card.Text>
                                        <Button variant="primary" onClick={() => addToCartHandler(product)}>
                                        Add to cart
                                        </Button>
                                    </Card.Body>
                                </Card>
                            );
                        })
                    )
                }

            </div>
        </>
    )
}
