import { useEffect, useState } from "react";
import { getSingleProduct } from "../Utility/FakeStore";
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {index} = useParams();

    useEffect(()=>{
        getSingleProduct(index).then(setProduct);
    },[product.id, index])

    const loading = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    return (
        <>
            {Object.keys(product).length === 0 ? loading : (
                <div>
                    <Image src={product.image} rounded />
                    <h2>{product.title}</h2>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                </div>
            )}
        </>
    )
}

export default ProductDetails;