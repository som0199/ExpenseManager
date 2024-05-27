import React, { useContext } from "react";
import ListItem from "./ListItem";
import TransContext from "../context/TransContext";

const ListGroup = () => {
  const { transactions } = useContext(TransContext);

  return (
    <ul className="list-group  px-md-5">
      {transactions.map((transaction) => (
        <ListItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};

export default ListGroup;
