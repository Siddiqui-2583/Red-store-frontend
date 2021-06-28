import './App.css';
import {useState,useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
import Header from './Components/Header/Header';
import ProductGrid from './Components/ProductGrid/ProductGrid'
import Cart from './Components/Cart/Cart'
import SuccessMsg from './Components/SuccessMsg/SuccessMsg'
// import Loading from './Components/Loading/Loading';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    console.log(product)
    let newCart = [...cart, product]
    console.log('new cart: ',newCart)
    setCart(newCart);
    // console.log([...cart, product]);
    // console.log("cart: ", cart);
  };


  useEffect(() => {
    axios
      .get("https://full-stack-engineer-task-mtech.herokuapp.com/all-products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    
  }, []);
  return (
    <div>
      <Router>
        <Header
          cartItemNum={cart.length}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Switch>
          <Route exact path="/">
            {!isOpen ? (
              <ProductGrid
                products={products}
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
              />
            ) : (
              <div>
                <div id="products">
                  <ProductGrid
                    products={products}
                    cart={cart}
                    handleAddToCart={handleAddToCart}
                  />
                </div>
                <div id="cartItems">
                  <Cart cart={cart} setCart={setCart} />
                </div>
              </div>
            )}
          </Route>

          <Route path="/order-successful">
            <SuccessMsg />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
