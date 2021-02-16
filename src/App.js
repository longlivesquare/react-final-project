import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsList from './Products Overview/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Product Details/Product Details';
import MainSiteNavbar from './Navbar/Main Site Navbar';
import CartProvider from './Providers/CartProvider';
import Cart from './Cart/Cart';
import { Luhn } from './Utility/CreditCard';

function App() {
  return (
    <CartProvider>
      <Switch>
        {console.log(Luhn("79927398712"))}
        {console.log(Luhn("79927398710"))}
        {console.log(Luhn("79927398711"))}
        {console.log(Luhn("79927398712"))}
        {console.log(Luhn("79927398713"))}
        <Route path='/products' component={ProductsList} exact/>
        <Route path='/products/:index' component={ProductDetails} />
        <Route path='/cart' component={Cart} />
        <Route path='/' exact>
          <MainSiteNavbar />
          Welcome to my Store
        </Route>
      </Switch>
    </CartProvider>
  );
}

export default App;
