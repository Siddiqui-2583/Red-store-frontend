import React,{ useState} from 'react';
import './CartItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
;
const CartItem = ({subtotal, setSubtotal, unitPrice}) => {
  const [price, setPrice] = useState(0);
  const [quantity, setquantity] = useState(0);
  
  const handlePlus = () => {
    setquantity(quantity+1);
    setPrice(price + unitPrice);
    setSubtotal(subtotal +unitPrice);
  }
  const handleMinus = () => {
    if (quantity !== 0) {
      setquantity(quantity - 1);
      setPrice(price - unitPrice);
      setSubtotal(subtotal - unitPrice);
    }
    
  };
 
    return (
      <div className="cart-item">
        <div>
          <h4>Maron T-shirt</h4>
          <h4>
            $<span>{price}</span>
          </h4>
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
          <FontAwesomeIcon id="crossIcon" icon={faTrash} />
        </div>
      </div>
    );
};

export default CartItem;