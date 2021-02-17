import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsList from './Products Overview/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Product Details/Product Details';
import MainSiteNavbar from './Navbar/Main Site Navbar';
import CartProvider from './Providers/CartProvider';
import Cart from './Cart/Cart';
import ShippingAddressForm from './Checkout/ShippingAddressForm';

function App() {
  return (
    <CartProvider>
      <Switch>
        <Route path='/products' component={ProductsList} exact/>
        <Route path='/products/:index' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Route path='/' exact>
          <MainSiteNavbar />
          <ShippingAddressForm />
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
