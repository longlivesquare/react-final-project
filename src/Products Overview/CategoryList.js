import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { getCategories } from "../Utility/FakeStore";

const CategoryList = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, [JSON.stringify(categories)]);

    return (
        <Form.Group controlId='formGroupCategoriesList'>
            <Form.Label>Categories</Form.Label>
            <Form.Control as='select' {...props}>
                <option>---</option>
                {categories.length ? categories.map((category, idx) => {
                    return (<option key={idx}>{category}</option>)
                }): <></>}
            </Form.Control>
        </Form.Group>
    )
}

export default CategoryList;