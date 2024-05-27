import React, { useContext, useEffect, useState } from "react";
import TransContext from "../context/TransContext";

const Form = () => {
  const { addTrans, edit, updateTrans } = useContext(TransContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTrans(edit.oldTrans.id, text, amount);
    } else {
      addTrans({
        id: crypto.randomUUID(),
        text: text,
        amount: parseInt(amount),
      });
    }
    setText("");
    setAmount("");
  };

  useEffect(() => {
    setText(edit.oldTrans.text), setAmount(edit.oldTrans.amount);
  }, [edit]);

  return (
    <form className="my-4 px-md-5" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="form-control text-capitalize rounded-0 my-1"
        placeholder="Enter Transaction"
        required
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input
        type="text"
        className="form-control rounded-0 my-1"
        placeholder="Enter Amount e.g- for expense: -2000, for income: 2000"
        required
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
      />
      <button className="btn btn-success btn-lg rounded-0 my-2">Save</button>
    </form>
  );
};

export default Form;
