import { useNavigate } from "react-router-dom";

const Cart = ({ cartadditems}) => {
  const total = cartadditems.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const navigate=useNavigate()

  return (
    <div>
      <h2>Your Cart</h2>

      {cartadditems.map((item) => (
        <p class="prod" key={item.id}>
          
          {item.title} - ${item.price}

          <img style={{width: 200}} src={item.thumbnail} alt={item.title}/>
       
        </p>
      ))}

      <h3>Total: ${total}</h3>

      <button onClick={()=>navigate("/payment")} disabled={ cartadditems.length===0} >Pay Now </button>
      <button onClick={()=>navigate("/")}>Go to home page </button>
    </div>
  );
};

export default Cart;
