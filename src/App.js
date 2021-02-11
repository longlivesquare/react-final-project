import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductsList from './Products Overview/ProductsList';
import { getAllProducts } from './Utility/FakeStore';

function App() {
  return (
    <div>
      <Switch>
        <Route to='/products' component={ProductsList} />
      </Switch>
    </div>
  );
}

export default App;
