import React, { useContext } from "react";
import TransContext from "../context/TransContext";

const ListItem = ({ transaction }) => {
  const { deleteTrans, editTrans } = useContext(TransContext);
  return (
    <li
      className={
        transaction.amount > 0
          ? "list-group-item my-1 bg-success-subtle border-0"
          : "list-group-item my-1 bg-danger-subtle border-0"
      }
    >
      <h3 className="pt-3 text-capitalize">
        {transaction.text} : {transaction.amount}
      </h3>
      <span>
        <button
          className="btn btn-danger btn-sm rounded-0 float-end"
          onClick={() => deleteTrans(transaction.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning btn-sm rounded-0 float-end"
          onClick={() => editTrans(transaction)}
        >
          Edit
        </button>
      </span>
    </li>
  );
};

export default ListItem;
