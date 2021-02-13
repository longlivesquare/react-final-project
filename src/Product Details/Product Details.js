import { useEffect, useState } from "react";
import { getSingleProduct } from "../Utility/FakeStore";

const ProductDetails = ({id, title, description, image, category}) => {
    const [product, setProduct] = useState({});

    useEffect(()=>{
        getSingleProduct(id).then.setProduct();
    },[product.id, id])

    return (
        <div>

        </div>
    )
}

export default ProductDetails;