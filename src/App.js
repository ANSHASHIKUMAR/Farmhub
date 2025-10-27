import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Product from './components/Product'
import Footer from './components/Footer'
import {CartProvider, cartProvider} from 'react-use-cart'
import Cart from './components/Cart.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <CartProvider>
      <Router>
          <div className="..App">
           
            <Switch>
              <Route exact path="/">
               <Header/>
                <div className="main-info" >
                  <Sidebar/>
                  <Product/> 
                </div>
                <Footer/>
              </Route>
      
              <Route path="/cart">
              <Cart/>
              </Route>
            </Switch>
      
    </div>
        
      </Router>
  
    </CartProvider>
  );
}

export default App;
