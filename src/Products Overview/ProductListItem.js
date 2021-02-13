import Card from "react-bootstrap/Card";

const ProductListItem = ({title, image, category, description, price}) => {
    return (
        <Card 
            className='ProductListItem mb-2'
            bg='dark'
            text='white'
            border='info'
            style={{
                flex: "1 0 auto", 
                width: "18rem"}}
        >
            <Card.Img src={image} style={{width: "100%"}}/>
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