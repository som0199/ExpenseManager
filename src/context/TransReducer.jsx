

const TransReducer = (state,action) => {

    if(action.type === "ADD_TRANS"){
        return {
            ...state,
            transactions : [action.payload, ...state.transactions],
        }
    }else if(action.type === "DELETE_TRANS"){
        return{
            ...state,
            transactions: state.transactions.filter(
                item=>item.id!==action.payload),
        }
    }else if(action.type==="EDIT_TRANS"){
        return {
            ...state,
            edit: {
                oldTrans : action.payload,
                isEdit : true,
            } 
        }
    }else if(action.type ==="UPDATE_TRANS"){
        return{
            ...state,
            transactions: state.transactions.map(item=>item.id === action.payload.id ? action.payload : item),
            edit: {oldTrans: {}, isEdit: false},
        }
    }
};

export default TransReducer