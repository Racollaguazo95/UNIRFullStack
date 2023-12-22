import React, { useContext, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { CategoryContext } from '../context/CategoryContext';
import { StoreRouter } from '../router/StoreRouter';


export const Navigation = () => {

    const { carrito } = useContext(CategoryContext);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir la recarga de la página
        // Aquí puedes manejar la búsqueda
    }

    return (
        <BrowserRouter>
            <div className='nav__position'>
                <Container fluid className='d-flex justify-content-center align-items-center bg-secondary'>
                    <Navbar expand="lg">
                        <Navbar.Brand as={Link} to='/home'><b>PC FAST STORE</b></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                navbarScroll
                            >
                                <NavDropdown title={<span className="nav__color">Menú</span>} className="mx-1">

                                    <NavDropdown.Item as={Link} to='/pcbuilds'>
                                        PC Builds
                                    </NavDropdown.Item>

                                    <NavDropdown.Item as={Link} to='/laptops'>

                                        Laptops

                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to='/gpus'>

                                        Tarjetas de video

                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/ssd'>

                                        SSD

                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/fuentes'>

                                        Fuentes de poder

                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to='/accesorios'>

                                        Accesorios

                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Form className="d-flex mx-1" onSubmit={handleSubmit}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        className="me-2 w-100"
                                        aria-label="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Link to={`/buscar?search=${searchTerm}`}>
                                        <Button variant="outline-info">
                                            <FaSearch />
                                        </Button>
                                    </Link>
                                </Form>
                                <Nav.Link className="mx-1" as={Link} to='/carrito'>
                                    <span className="nav__color">Carrito de compras ({carrito.length})<FaShoppingCart size={20} /></span>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </Container>
            </div>
            <StoreRouter />
        </BrowserRouter>
    )
}
