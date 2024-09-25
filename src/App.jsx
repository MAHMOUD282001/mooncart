import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Home, Layout, ProductDetails, Shop } from "./router";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        
        <Route path="/shop" element={
          <Layout>
            <Shop />
          </Layout>
        } />
        
        <Route path="/product-details/:id" element={
          <Layout>
            <ProductDetails />
          </Layout>
        } />
        
        <Route path="/cart" element={
          <Layout>
            <Cart />
          </Layout>
        } />
      </Routes>
    </>
  );
}

export default App;
