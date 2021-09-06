import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";


const Expenses = (props)=>(
    <Card className="expenses">
        {props.expenses.map(item => (
            <ExpenseItem key={item.id} id={item.id} title={item.title} amount={item.amount} date={item.date} />
        ))}
    </Card>
)
export default Expenses