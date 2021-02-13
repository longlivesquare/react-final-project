import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const HighlightedRow = styled(Row)`
    background-color: black;
    color: white;   
    border: 5px solide white;
    padding: 5px;
    width: 100%;

    &:hover {
        background-color: gray;
    }

`

const ProductListItem = ({title, image, category, description, price, handleProdDet}) => {
    return (
        <HighlightedRow onClick={handleProdDet}>
            <Col md={3}>
                <Image src={image} alt='Product' thumbnail />
            </Col>  
            <Col md={9}>
                <h2>{title}</h2>
                <p>${price.toFixed(2)}</p>
            </Col>
        </HighlightedRow>
    )
}

export default ProductListItem;