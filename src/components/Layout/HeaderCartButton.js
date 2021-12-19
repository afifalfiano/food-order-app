import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
    const [isCartUpdated, setCartIsUpdated] = useState(false);
    const cartCtx = useContext(CartContext);

    const btnClasses = `${classes.button} ${isCartUpdated ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setCartIsUpdated(true);

        const timer = setTimeout(() => {
            setCartIsUpdated(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items]);

    const numberItemsOfCart = cartCtx.items.reduce((currentNumb, item) => currentNumb + item.amount, 0);
    return <button className={btnClasses} onClick={props.showModalHandler}>
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