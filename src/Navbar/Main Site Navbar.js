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
        coloor: #009900;
    }
`

const MainSiteNavbar = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand style={{fontFamily: "'Acme', sans-serif"}}>
                <Link to='/'><Image src={`${process.env.PUBLIC_URL}/logo64.png`} alt='Logo' />Crazy Stevens Emporium</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to='/products'>Browse</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainSiteNavbar