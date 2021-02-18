import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";
import { useHistory } from "react-router-dom";
import CategoryList from "./CategoryList";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filtCategory, setFiltCategory] = useState('---');
    const [filteredList, setFilteredList] = useState([]);

    const {push} = useHistory();

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    const loading = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    const generateList = (myProducts=products) => {
        return myProducts.map(({title, image, price, description, category, id}) => {
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
        })
    }

    const handleCategoryFilter = (e) => {
        const newCat = e.target.value;
        setFiltCategory(newCat);
        if(newCat !== '---'){
            setFilteredList(products.filter(product => product.category === newCat))
        }
    }

    return (
        <Container>
            <CategoryList onChange={handleCategoryFilter} />
            <h1>Product List</h1>
            {products.length === 0 ? loading : <Container style={{width: "100%"}} fluid>
                {filtCategory === '---' ? 
                generateList() :
                generateList(filteredList)}
            </Container>
            }
        </Container>
    )
}

export default ProductsList;