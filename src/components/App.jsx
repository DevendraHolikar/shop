import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Login from "./Login";
import Body from "./Body";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import ProductsDetails from "./ProductsDetails";
import Cart from "./Cart";
import Order from "./Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC (Login) */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* PROTECTED LAYOUT */}
          <Route
            element={
              <ProtectedRoute>
                <Body />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<ProductsDetails />} />
            </Route>
            
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />

          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
