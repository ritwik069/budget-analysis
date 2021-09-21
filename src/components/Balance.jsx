import {GlobalContext} from '../context/GlobalState'
import {useContext} from 'react'

function Balance(){
    const {transaction}=useContext(GlobalContext);
    const amounts = transaction.map(transactions=> transactions.amount);
    const total = amounts.reduce((acc,item)=>(acc+item),0);
    console.log(amounts);
    return(
        <>
        <h4>Your Balance</h4>
        <h1 >${total}</h1>
        

        </>
    )
}
export default Balance;