import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Content = ({ cartadditems, setcartadditems}) => {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const resjson = await res.json();
    setProductData(resjson.products);
  };

  const additem = (item) => {
    setcartadditems([...cartadditems, item]);
  };

  const deleteitem = (item) => {
    const updatedarr = cartadditems.filter(
      (items) => items.id !== item.id
    );
    setcartadditems(updatedarr);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Total items in cart {cartadditems.length}</h2>

      <button onClick={() => navigate("/cart")}>
        Show cart items
      </button>

      <h2>Products</h2>

      {productData.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        productData.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <img src={product.thumbnail} alt={product.title} width="120" />
            <p>${product.price}</p>
            <button onClick={() => additem(product)}>Add</button>
            <button onClick={() => deleteitem(product)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Content;
