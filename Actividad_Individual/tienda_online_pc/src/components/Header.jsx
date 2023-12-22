import React from 'react'
import { Navbar, Nav, Image, Container } from 'react-bootstrap';

export const Header = () => {
    return (
        <header>
            <Container fluid className='d-flex justify-content-center align-items-center bg-black'>
                <Navbar expand="lg">
                    <Nav className="ml-auto">
                        <Image src="/pc-store-logo-svg.svg" className='img-fluid' alt="Logo" />
                    </Nav>
                </Navbar>
            </Container>
        </header>
    )
}
