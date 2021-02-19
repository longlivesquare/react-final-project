import { useEffect } from "react";
import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { getCategories } from "../Utility/FakeStore";

const CategoryList = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, [JSON.stringify(categories)]);

    return (
        <InputGroup className='mb-3'>
            <InputGroup.Prepend>
                <InputGroup.Text>Categories</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control as='select' {...props}>
                <option>---</option>
                {categories.length ? categories.map((category, idx) => {
                    return (<option key={idx}>{category}</option>)
                }): <></>}
            </Form.Control>
        </InputGroup>
    )
}

export default CategoryList;