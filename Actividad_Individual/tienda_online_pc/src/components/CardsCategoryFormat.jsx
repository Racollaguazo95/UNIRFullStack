import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { CardsCategory } from './CardsCategory';

export const CardsCategoryFormat = () => {
    const images = [
        { image: "/pc_build.png", route: "/pcbuilds" }, { image: "/laptops.png", route: "/laptops" }, { image: "/tarjeta_video.png", route: "/gpus" }, { image: "/fuentes_poder.png", route: "/fuentes" }, { image: "/ssd.png", route: "/ssd" }, { image: "/accesorios.png", route: "/accesorios" },
    ]

    return (
        <Container>
            <hr className='card__line' />
            <div className='card__category'>
                <img className='img-fluid card__category__message' src='/msg-category.svg' />
            </div>
            <hr className='card__line' />
            <Row className="justify-content-md-center">
                {
                    images.map((images, index) => (
                        <CardsCategory
                            key={index}
                            image={images.image}
                            route={images.route}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
