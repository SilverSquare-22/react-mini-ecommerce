import { useNavigate } from "react-router-dom";



const Payment = () => {
const navigate=useNavigate();
  return (
    <div>
      <h2>Payment Options</h2>
      <p>UPI</p>
      <p>Card</p>
      <p>Cash on Delivery</p>
      
      <button onClick={()=>navigate("/")}>Go to Home Page</button>
    </div>

    
  );
};

export default Payment;
