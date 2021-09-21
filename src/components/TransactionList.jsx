import React ,{useContext} from "react";
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from "./Transaction";

function TransactionList(){
    // const context=useContext(GlobalContext);

    // console.log(context);
    const {transaction}=useContext(GlobalContext);

    return(
        <>
        <h3>History</h3>
        <ul className="list">
            {transaction.map(transactions=>( <Transaction key = {transactions.id} transactions={transactions}/>
                  )
            )}
         

        </ul>
        </>
    )
}
export {TransactionList};