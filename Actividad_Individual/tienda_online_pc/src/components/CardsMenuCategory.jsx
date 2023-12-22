import React from 'react'
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const CardsMenuCategory = ({ id, image, shortDescription, price, route }) => {
  let paramRoute = route+'/'+id;
  return (
    <Col xs={12} md={4} className="mb-4">

      <Card className='border-black border-2 bg-light'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          {
            shortDescription
          }
          <hr className='card__menu__line' />
          <b>Precio: </b>${price}
          <hr className='card__menu__line' />
          <Link to={paramRoute}>
            <Button variant="warning" className="me-2">
              Ver características
            </Button>
          </Link>
        </Card.Body>
      </Card>

    </Col>
  )
}
