import React from 'react'
import { Carousel, Container } from 'react-bootstrap';

export const CarouselFormat = () => {
    return (
        <div>
            <br />
            <Container className='d-flex justify-content-center align-items-center'>
                <Carousel className='w-75'>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="/PC1.png"
                            alt="Primera imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="/PC2.png"
                            alt="Segunda imagen"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block img-fluid w-100"
                            src="/PC3.png"
                            alt="Tercera imagen"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}
