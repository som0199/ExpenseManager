import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Balance from "./components/Balance";
import ListGroup from "./components/ListGroup";
import { TransProvider } from "./context/TransContext";

const App = () => {
  return (
    <TransProvider>
      <div className="mb-3 text-light">
        <Navbar />
      </div>
      <div className="container row  ">
        <div className="col-sm-12 col-lg-6">
          <Balance />
        </div>
        <div className="col-sm-12 col-lg-6">
          <Form />
          <ListGroup />
        </div>
      </div>
    </TransProvider>
  );
};

export default App;
