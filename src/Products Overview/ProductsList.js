import { useEffect, useState } from "react";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";
import './ProductsList.css';

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    return (
        <div>
            <h1>Product List</h1>
            {products.length === 0 ? <p>Nothing</p> : <div className='ProductList'>
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