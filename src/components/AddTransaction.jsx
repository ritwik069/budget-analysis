import { useContext, useState } from "react";
import {GlobalContext} from '../context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setamount] = useState(0);
   const {AddTranss} = useContext(GlobalContext)
    const onsubmit=(e)=>{
        e.preventDefault();
        console.log(amount);
        const newTransaction = {
            id:Math.floor(Math.random()*1000000000),
            text:text,
            amount:parseInt(amount)
        }
        AddTranss(newTransaction);
    }
    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onsubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"  value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Text---" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" placeholder="Enter amount here">
                        Amount <br /> (negative -expense.positive - income)</label>
                    <input type="number"  value={amount} onChange={(e)=>{setamount(e.target.value)}}placeholder="Enter Amount..." />
                </div>
                <button className="btn">Add</button>
            </form>

        </>
    )
}
export default AddTransaction;