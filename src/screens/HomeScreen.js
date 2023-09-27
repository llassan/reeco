import React, { useState } from "react";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import OrderDetails from "../components/OrderDetails";
import OrderSummary from "../components/OrderSummary";
function HomeScreen() {

  return (
    <>
      <Navbar />
      <OrderSummary />
      <OrderDetails />
      <Table />
    </>
  );
}

export default HomeScreen;
