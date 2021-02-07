import Buttton from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addTocart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addTocart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Buttton
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Buttton>
        <p>{item.amount}</p>
        <Buttton
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addTocart(item)}
        >
          +
        </Buttton>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default CartItem;
