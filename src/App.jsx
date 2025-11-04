import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Form from "./Components/Form";
export default function App() {
  return (
    <div>
      <Navbar />

      <Home />
      <Form />
    </div>
  );
}
