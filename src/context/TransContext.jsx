import { createContext, useReducer, useState } from "react";
import TransReducer from "./TransReducer";

const TransContext = createContext();

export const TransProvider = ({ children }) => {
  const initialState = {
    transactions: [{ id: 1, text: "Salary", amount: 30000 }],
    edit: {
      oldTrans: {},
      isEdit: false,
    },
  };

  const [state, dispatch] = useReducer(TransReducer, initialState);

  //add transaction
  const addTrans = (newTrans) => {
    dispatch({
      type: "ADD_TRANS",
      payload: newTrans,
    });
  };

  //delete transaction
  const deleteTrans = (id) => {
    dispatch({
      type: "DELETE_TRANS",
      payload: id,
    });
  };

  //Edit transaction
  const editTrans = (edited) => {
    dispatch({
      type: "EDIT_TRANS",
      payload: edited,
    });
  };

  //Update transaction
  const updateTrans = (oldId, text, amount) => {
    dispatch({
      type: "UPDATE_TRANS",
      payload: {
        id: oldId,
        text: text,
        amount: parseInt(amount),
      },
    });
  };

  return (
    <TransContext.Provider
      value={{
        transactions: state.transactions,
        edit: state.edit,
        addTrans,
        deleteTrans,
        editTrans,
        updateTrans,
      }}
    >
      {children}
    </TransContext.Provider>
  );
};
export default TransContext;
