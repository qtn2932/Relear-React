import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"


const Expenses = (props)=>(
    <div className="expenses">
        {props.expenses.map(item => (
            <ExpenseItem id={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
    </div>
)
export default Expenses