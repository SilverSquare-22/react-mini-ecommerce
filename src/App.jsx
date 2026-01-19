import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Content from "./Components/Content";
import Cart from "./Components/Cart";
import Payment from "./Components/Payment";

function App() {
  const [cartadditems, setcartadditems] = useState([]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Content
              cartadditems={cartadditems}
              setcartadditems={setcartadditems}
             
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cartadditems={cartadditems} 
          />}
        />

        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
