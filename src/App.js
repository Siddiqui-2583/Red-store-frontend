import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import ProductGrid from './Components/ProductGrid/ProductGrid'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductGrid />
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
