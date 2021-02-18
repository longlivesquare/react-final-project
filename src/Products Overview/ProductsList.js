import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { getAllProducts } from "../Utility/FakeStore";
import ProductListItem from "./ProductListItem";
import { useHistory } from "react-router-dom";
import CategoryList from "./CategoryList";
import { Form, FormControl, InputGroup, Row } from "react-bootstrap";
import StyledButton from "../common/Button";

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [filtCategory, setFiltCategory] = useState('---');
    const [filteredList, setFilteredList] = useState([]);
    const [sortBy, setSortBy] = useState(0);
    const [search, setSearch] = useState('');
    const [doSearch, setDoSearch] = useState(false);

    const {push} = useHistory();

    useEffect(() => {
        getAllProducts().then(setProducts);
    },[JSON.stringify(products)])

    const loading = <Spinner animation='border' role='status'>
        <span className="sr-only">Loading...</span>
    </Spinner>;

    const generateList = (myProducts=products) => {
        if(doSearch) {
            myProducts = myProducts.filter(product => product.title.toLowerCase().search(search) >= 0)
        }

        switch (sortBy) {
            case 1: // Price: Low to High
                myProducts.sort((el1, el2) => {
                    const price1 = parseFloat(el1.price);
                    const price2 = parseFloat(el2.price);
                    return price1-price2;
                })
                break;
            case 2: // Price: High to Low
                myProducts.sort((el1, el2) => {
                    const price1 = parseFloat(el1.price);
                    const price2 = parseFloat(el2.price);
                    return price2-price1;
                })
                break;
            case 0: // Category
            default:
                myProducts.sort((el1, el2) => {
                    if(el1.category > el2.category) {
                        return -1;
                    } else if (el1.category < el2.category) {
                        return 1;
                    }
                    return 0;

                })
                break;
        }

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

    const handleSort = (e) => {
        setSortBy(e.target.selectedIndex);
    }

    const handleClearSearch = () => {
        setSearch('');
        setDoSearch(false);
    }

    return (
        <Container>
            <Row>
                <CategoryList onChange={handleCategoryFilter} />
                <Form.Group>
                    <Form.Label>Sort by...</Form.Label>
                    <Form.Control as='select' onChange={handleSort}>
                        <option>Category</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </Form.Control>
                </Form.Group>
                <InputGroup className='mb-3'>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="search-box">Search</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                        placeholder='Search'
                        aria-label='Search'
                        aria-describedby='search-box'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <InputGroup.Append>
                        <StyledButton onClick={()=>setDoSearch(true)}>Search</StyledButton>
                        <StyledButton onClick={handleClearSearch}>Clear Search</StyledButton>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
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