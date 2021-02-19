import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Badge } from "react-bootstrap"
import { useCart } from "../hooks"

const StyledNavbarBrand = styled(Navbar.Brand)`
    font-family: 'Acme', sans-serif;
    font-size: 1.4em;
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
    const { cartQty } = useCart();
    return (
        <Navbar bg='dark' variant='dark'>
            <StyledNavbarBrand style={{fontFamily: "'Acme', sans-serif"}}>
                <Link to='/'><Image src={`${process.env.PUBLIC_URL}/logo64.png`} alt='Logo' />Crazy Stevens Emporium</Link>
            </StyledNavbarBrand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{display:"flex", alignContent:"space-around"}}>
                    <Link to='/products'>Browse</Link>
                    <Link to='/cart'>
                        <Image src={`${process.env.PUBLIC_URL}/cart4.svg`} alt='cart' style={{paddingLeft: "5px"}}/>
                        <Badge variant='dark'>{cartQty}</Badge>
                        <span className='sr-only'>items in cart</span>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainSiteNavbar