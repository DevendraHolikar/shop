import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Login from "./Login";
import Body from "./Body";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

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
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
