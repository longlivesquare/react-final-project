import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";
import { useHistory } from "react-router-dom";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const {push} = useHistory();

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    const loading = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    return (
        <Container>
            <h1>Product List</h1>
            {products.length === 0 ? loading : <Container style={{width: "100%"}} fluid>
                {products.map(({title, image, price, description, category, id}) => {
                    const handleProductDetail = () => {
                        push(`/products/${id}`);
                    }
                    return(
                        <ProductListItem
                            key={title}
                            title={title}
                            image={image}
                            price={price}
                            description={description}
                            category={category}
                            handleProdDet={handleProductDetail} 
                        />
                    )
                })}
            </Container>
            }
        </Container>
    )
}

export default ProductsList;