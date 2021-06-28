import React,{ useState} from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
;
const CartItem = ({ total, setTotal, title, unitPrice,cart,setCart }) => {

  unitPrice=parseInt(unitPrice);
  const [subtotal, setSubtotal] = useState(0);
  const [quantity, setquantity] = useState(0);
  
  const handlePlus = () => {
    setquantity(quantity+1);
    setSubtotal(subtotal + unitPrice);
    setTotal(total + unitPrice);
  }
  const handleMinus = () => {
    if (quantity !== 0) {
      setquantity(quantity - 1);
      setSubtotal(subtotal - unitPrice);
      setTotal(total - unitPrice);
    }
    
  };
  // const handleDelete = () => {
  //   const newCart = cart.map((pd) => pd.title !== title);
  //     setCart(newCart);
  // };
    return (
      <div className="cart-item">
        <div>
          <h4>{title}</h4>
          <p>
            Subtotal: $<span>{subtotal}</span>
          </p>
        </div>

        {/* <input id="firstClass" class="inp-style inp-width" type="number" name="" value="0"></input> */}
        <div class="input-group number-spinner">
          <button onClick={handleMinus}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input id="noOfProduct" type="text" class="" value={quantity} />
          <button onClick={handlePlus}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {/* <button onClick={() => handleDelete(title)}>
            <FontAwesomeIcon id="crossIcon" icon={faTrash} />
          </button> */}
          <FontAwesomeIcon id="crossIcon" icon={faTrash} />
        </div>
      </div>
    );
};

export default CartItem;