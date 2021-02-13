import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";
import './ProductsList.css';

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
            {products.length === 0 ? nothing : <div className='ProductList'>
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
            </div>
            }
        </div>
    )
}

export default ProductsList;