import { useState } from "react"
import CartContext from "../Contexts/CartContext"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);
    const [cartPrice, setCartPrice] = useState(0);

    // Add a new item to the cart
    // id: Id of product to add to cart
    // qty: Amount of iindicated product to add to cart
    // title: Readable description of product
    // image: Url for image of proudct
    // price: Cost per unit of product
    const AddItem = (id, qty, title, image, price) => {
        const CartItem = {
            id, 
            qty, 
            title, 
            image, 
            price
        }
        setCart([...cart, CartItem]);
        setCartQty(qty+cartQty);
        setCartPrice(cartPrice+(price*qty))
    }

    // Remove an item from the cart
    // id: id of product to remove
    const RemoveItem = (idx) => {
        setCartQty(cartQty-cart[idx].qty);
        setCartPrice(cartPrice-(cart[idx].qty*cart[idx].price));
        cart.splice(idx, 1);
    }

    // Update the quantity of item in cart
    // id: id of product to update
    // qty: New quantity of product. Replaces old value.
    const UpdateQty = (idx, qty) => {
        //New Qty is 0
        setCartQty(cartQty+(qty-cart[idx].qty))
        setCartPrice(cartPrice+(qty-cart[idx].qty)*cart[idx].price)
        if (!qty) {
            cart.splice(idx, 1)
        }
        else {
            cart[idx].qty = qty
        }
    }

    return (
        <CartContext.Provider value={{cart, AddItem, RemoveItem, UpdateQty, cartQty, cartPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider