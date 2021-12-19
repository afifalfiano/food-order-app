
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItem = cartCtx.items.length > 0;

    const onRemoveHandler = (id) => {
        console.log(id, 'cek');
    }

    const onAddHandler = (item) => {
        console.log(item, 'cek a');
    }

    const cartItem = cartCtx.items.map(item => {
        return <CartItem id={item.id} key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={onAddHandler.bind(null, item)} onRemove={onRemoveHandler.bind(null, item.id)}/>
    })

    return <Modal hideModalHandler={props.hideModalHandler}>
        <ul className={classes['cart-items']}>
            {cartItem}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideModalHandler}>Close</button>
            {hasItem && <button className={classes.btn}>Order</button>}
        </div>
    </Modal>
}

export default Cart;