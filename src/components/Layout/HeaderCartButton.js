import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberItemsOfCart = cartCtx.items.reduce((currentNumb, item) => currentNumb + item.amount, 0);
    return <button className={classes.button} onClick={props.showModalHandler}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberItemsOfCart}
        </span>
    </button>
}

export default HeaderCartButton;