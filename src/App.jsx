import{BrowserRouter , Routes, Route} from "react-router-dom"
import { ItemListContainer } from "/src/components/pages/ItemsListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import { NotFound404 } from "./components/pages/404/NotFound404";
import { Navbar } from "./components/layout/Navbar/Navbar";
import { CartContextProvider } from "./context/CartContexto";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import { Toaster } from "sonner";
import { Footer } from "./components/layout/Footer/Footer";

function App() {/*Padre */
  

  return ( /**Hijos */
    <BrowserRouter>
    <Toaster />
      <CartContextProvider>
        <Navbar/>
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/category/:category" element={<ItemListContainer />}/>
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/" />
              <Route path="*" element={<NotFound404/>} />
            </Routes>
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App
