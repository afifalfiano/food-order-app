
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {

    const cartItem = [{id: 'c1', name: 'Sushi', amount: 2, price: '18.1'}].map(item => {
        return <li key={item.id}>{item.name}</li>
    })

    return <Modal hideModalHandler={props.hideModalHandler}>
        <ul className={classes['cart-items']}>
            {cartItem}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.11</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.hideModalHandler}>Close</button>
            <button className={classes.btn}>Order</button>
        </div>
    </Modal>
}

export default Cart;