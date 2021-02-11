import { useEffect, useState } from "react";
import { getAllProducts } from "../Utility/FakeStore";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    return (
        <div className='ProductList'>
            <h1>Product List</h1>
            {products.length === 0 ? <p>Nothing</p> : <div>
                {products.forEach((product) => {
                <p>{product.title}</p>
            })}
            </div>
            }
        </div>
    )
}

export default ProductsList;