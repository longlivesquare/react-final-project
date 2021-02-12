import ProductsList from "./ProductsList"

const ProductListItem = ({title, image, category, description}) => {
    return (
        <div className='ProductListItem'>
            <h3>{title}</h3>
            <img src={image} alt='product'/>
            <p>{category}</p>
            <p>{description}</p>
        </div>
    )
}

export default ProductListItem;