import './App.css';
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import ProductGrid from './Components/ProductGrid/ProductGrid'
import Cart from './Components/Cart/Cart'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  // function toggleCart() {
  //   var x = document.getElementById("cartItems");
  //   console.log(document.getElementById("cartItems"));
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
  // }
  console.log(isOpen)
  return (
    <div>
      <Router>
        <Header setIsOpen={setIsOpen} />
        <Switch>
          <Route exact path="/">
            {/* <ProductGrid /> */}
            <div>
              <div id="products">
                <ProductGrid />
              </div>
              <div id="cartItems">
                <Cart />
              </div>
            </div>
          </Route>
          <Route path="/cart">
            <div>
              <div id="products">
                <ProductGrid />
              </div>
              <div id="cartItems">
                <Cart />
              </div>
            </div>
            {isOpen === true ? (
              <div>
                <div id="products">
                  <ProductGrid />
                </div>
                <div id="cartItems">
                  <Cart />
                </div>
              </div>
            ) : (
              <ProductGrid />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
