import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsList from './Products Overview/ProductsList';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from './Product Details/Product Details';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/products' component={ProductsList} exact/>
        <Route path='/products/:index' component={ProductDetails} />
        <Route path='/' exact>
          Welcome to my Store
        </Route>
      </Switch>
    </div>
  );
}

export default App;
