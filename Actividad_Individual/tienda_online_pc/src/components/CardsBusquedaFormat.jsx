import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { CardsMenuCategory } from './CardsMenuCategory';
import { CategoryContext } from '../context/CategoryContext';

export const CardsBusquedaFormat = () => {
    const { pcbuilds, laptops, gpus, fuentes, ssd, accesorios } = useContext(CategoryContext);

    const searchDescription = (description) => {
        const arrays = [pcbuilds, laptops, gpus, fuentes, ssd, accesorios];
        let results = [];

        // Convertir la descripción de búsqueda a minúsculas
        const lowerCaseDescription = description.toLowerCase();

        arrays.forEach(array => {
            array.forEach(item => {
                // Convertir la descripción del artículo a minúsculas antes de hacer la comparación
                if (item.shortDescription.toLowerCase().includes(lowerCaseDescription)) {
                    results.push(item);
                }
            });
        });

        return results;
    }


    const location = useLocation();
    const queryString = new URLSearchParams(location.search);
    const searchTerm = queryString.get('search');

    // Usar la función searchDescription
    const items = searchDescription(searchTerm);

    return (
        <Container>
            <br />
            <Row className="justify-content-md-center">
                {
                    items.length > 0 ? (
                        items.map((item, index) => (
                            <CardsMenuCategory
                                key={index}
                                id={item.id}
                                image={item.image}
                                shortDescription={item.shortDescription}
                                price={item.price}
                                route={item.route}
                            />
                        ))
                    ) : (
                        <Col xs={12} className="text-center">
                            <Image className="img-fluid" src="/not_found.svg" alt="No se encontraron resultados" />
                            <p className='seach__item'>No se encontraron resultados</p>
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}
