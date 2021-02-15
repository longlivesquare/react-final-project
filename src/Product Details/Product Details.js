import { useEffect, useState } from "react";
import { getSingleProduct } from "../Utility/FakeStore";
import Spinner from 'react-bootstrap/Spinner';
import Image from 'react-bootstrap/Image';
import { useHistory, useParams } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const ProductDetails = (props) => {
    const [product, setProduct] = useState({});
    const {index} = useParams();
    const history = useHistory();

    useEffect(()=>{
        getSingleProduct(index).then(setProduct);
    },[product.id, index])

    const loading = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
        <Navbar>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" onClick={goBack} style={{cursor:"pointer"}}>
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
        </Navbar>
            {Object.keys(product).length === 0 ? loading : (
                <div>
                    <div>
                        <Image src={product.image} style={{width:"20%"}} rounded />
                        <h2>{product.title}</h2>
                        <p>${product.price.toFixed(2)}</p>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetails;