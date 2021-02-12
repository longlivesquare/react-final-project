import Card from "react-bootstrap/Card";
import './ProductListItem.css'

const ProductListItem = ({title, image, category, description, price}) => {
    return (
        <Card 
            className='ProductListItem mb-2'
            bg='dark'
            text='white'
            border='info'>
            <Card.Img src={image} />
            <Card.Header>{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    ${price.toFixed(2)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProductListItem;