import React, { useContext } from "react";
import TransContext from "../context/TransContext";

const Balance = () => {
  const { transactions } = useContext(TransContext);

  let Income = transactions
    .filter((item) => item.amount > 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  let Expense = transactions
    .filter((item) => item.amount < 0)
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);

  let Balance = Income + Expense;
  return (
    <div className="container px-md-5 text-lg-center  ">
      <div className="row  ">
        <div className="col-sm-12 col-md-12 col-lg-12 bg-info rounded-5 p-4 ">
          <h2 className="text-dark text-secondary"> Total Income </h2>
          <h3 className="text-light">{Income}</h3>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 bg-danger rounded-5 p-4">
          <h2 className="text-dark text-secondary">Total Expense</h2>
          <h3 className="text-light">{Expense}</h3>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 bg-success rounded-5 p-4">
          <h2 className="text-dark text-secondary">Balance</h2>
          <h3 className="text-light">{Balance} </h3>
        </div>
      </div>
    </div>
  );
};

export default Balance;
