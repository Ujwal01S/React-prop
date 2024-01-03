import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

    const [enteredAmount, setEnteredAmount] = useState(''); //by default in target even if it is number stored in string

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }
    
    const [enteredDate, setEnteredDate] = useState('')

    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        //object to store the data user input
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date (enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle(''); //empty the entered value after user submits
        setEnteredAmount('');
        setEnteredDate('');
        
    };


    return (
        <form onSubmit ={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type = 'text'  value ={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" 
                    value = {enteredAmount}
                    min= "0.01" step = "0.01"  onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = 'date' 
                    value = {enteredDate}
                    min = '2023-12-20' max = '2025-01-30' onChange={dateChangeHandler}/>
                </div>
                </div>
                    <div className="new-expense__action">
                    <button type = "submit">Add Expense</button>
                </div>
        </form>
    );
}
export default ExpenseForm;