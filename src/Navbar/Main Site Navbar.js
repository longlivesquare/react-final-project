import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: 'Acme', sans-serif;

    a:link {
        color: #009900;
    }

    a:visited {
        color: #009900;
    }

    a:hover {
        color: white;
    }
`

const MainSiteNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <StyledNavbarBrand style={{fontFamily: "'Acme', sans-serif"}}>
                <Link to='/'><Image src={`${process.env.PUBLIC_URL}/logo64.png`} alt='Logo' />Crazy Stevens Emporium</Link>
            </StyledNavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/products'>Browse</Link>
                    <Link to='/cart'>Cart</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainSiteNavbar