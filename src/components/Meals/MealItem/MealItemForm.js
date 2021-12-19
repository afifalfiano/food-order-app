
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm = props => {
    const [isValidForm, setIsValidForm] = useState(true);
    const mealItemRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = mealItemRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setIsValidForm(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label='Amount' ref={mealItemRef} input={{    
            type: 'number',
            id: 'amount_' + props.id,
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
        {!isValidForm && <p>Please input a valid amount (1-5)</p>}
    </form>

}

export default MealItemForm;