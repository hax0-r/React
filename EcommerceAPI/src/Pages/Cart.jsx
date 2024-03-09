import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'

export default function Cart() {
  const { cart } = useSelector((state) => state.cartItemReducer)
  return (
    <>
      <div className="container d-flex flex-wrap gap-5 my-5">
        {
          cart.map((product, idx) => (
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Img variant="top" style={{ height: '20rem' }} src={product.image} />
              <Card.Body>
                <Card.Title className="clamp-1">{product.title}</Card.Title>
                <Card.Text className="clamp-3">{product.description}</Card.Text>
                <Button variant="primary">
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </>
  )
}
