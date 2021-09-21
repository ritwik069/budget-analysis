const AppReducer=(state,action)=>{
     switch(action.type){
        case 'DELETE_TRANS':
            {console.log(action.type,action.payload);
            return {
                ...state,
                transaction : state.transaction.filter(x => x.id !== action.payload)
                // transaction:state.transaction.filter(transactions=>transactions.id !==action.payload)
            }
        }
        case 'ADD_TRANS':
            return{
                ...state,
                transaction :[action.payload,...state.transaction]
            }
        default:
            return state;
    }
}
export default AppReducer;