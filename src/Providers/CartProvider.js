import { useState } from "react"
import CartContext from "../Contexts/CartContext"

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQty, setCartQty] = useState(0);

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
        console.log("Adding to qty:",qty);
        setCartQty(qty+cartQty);
    }

    // Remove an item from the cart
    // id: id of product to remove
    const RemoveItem = (id) => {
        const idx = cart.findIndex((product) => {
            return(
                product.id === id
            )
        })
        setCartQty(cartQty-cart[idx].qty)
        cart.splice(idx, 1);
    }

    // Update the quantity of item in cart
    // id: id of product to update
    // qty: New quantity of product. Replaces old value.
    const UpdateQty = (id, qty) => {
        const idx = cart.findIndex((product) => {
            return (
                product.id === id
            )
        })
        //New Qty is 0
        setCartQty(cartQty+(qty-cart[idx].qty))
        if (!qty) {
            cart.splice(idx, 1)
        }
        else {
            cart[idx].qty = qty
        }
    }

    return (
        <CartContext.Provider value={{cart, AddItem, RemoveItem, UpdateQty, cartQty}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider