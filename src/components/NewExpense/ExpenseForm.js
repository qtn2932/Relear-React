import React, {useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = () =>{
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const inputHandler = (event) =>{
        setUserInput((prevState)=>{
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        const newExpense = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        }
        console.log(newExpense)
    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input onChange={inputHandler} name='title' type='text' value={userInput.title}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input onChange={inputHandler} name='amount' type='number' min='0.01' step='0.01' value={userInput.amount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input onChange={inputHandler} name='date' type='date' min='2019-01-01' max='2022-12-31' value={userInput.date}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm