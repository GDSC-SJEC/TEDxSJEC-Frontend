import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "../pages/Registration";
import Ticket from "../pages/Ticket";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="ticket/:id" element={<Ticket />} />
    </Routes>
  );
};

export default index;
