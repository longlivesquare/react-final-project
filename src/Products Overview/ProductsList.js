import { useEffect, useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";

const FlexCardDeck = styled(CardDeck)`
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    `

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    const nothing = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    return (
        <div>
            <h1>Product List</h1>
            {products.length === 0 ? nothing : <FlexCardDeck>
                {products.map(({title, image, price, description, category}) => {
                    return(
                        <ProductListItem
                            key={title}
                            title={title}
                            image={image}
                            price={price}
                            description={description}
                            category={category} 
                        />
                    )
                })}
            </FlexCardDeck>
            }
        </div>
    )
}

export default ProductsList;