import React from "react";
import Dashboard from "./Contacts/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import classes from "./App.module.css";
import ContactForm from "./Contacts/ContactForm";
import Contacts from "./Contacts/Contacts";
function App() {
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/addcontact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
