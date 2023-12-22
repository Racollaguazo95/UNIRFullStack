import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { CardsMenuCategory } from './CardsMenuCategory';
import { CategoryContext } from '../context/CategoryContext';

export const CardsMenuCategoryFormat = () => {
    const { pcbuilds, laptops, gpus, fuentes, ssd, accesorios } = useContext(CategoryContext);
    const location = useLocation();

    let items;
    if (location.pathname.includes('/pcbuilds')) {
        items = pcbuilds;
    } else if (location.pathname.includes('/laptops')) {
        items = laptops;
    } else if (location.pathname.includes('/gpus')) {
        items = gpus;
    } else if (location.pathname.includes('/fuentes')) {
        items = fuentes;
    } else if (location.pathname.includes('/ssd')) {
        items = ssd;
    } else if (location.pathname.includes('/accesorios')) {
        items = accesorios;
    } else {
        items = [];
    }

    for (let i = 0; i < items.length; i++) {
        if (typeof items[i].description === 'string') {
            items[i].description = items[i].description.split('\n');
        }
    }
    
    return (
        <Container>
            <br />
            <Row className="justify-content-md-center">
                {
                    items.map((items, index) => (
                        <CardsMenuCategory
                            key={index}
                            id={items.id}
                            image={items.image}
                            shortDescription={items.shortDescription}
                            price={items.price}
                            route={items.route}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}
