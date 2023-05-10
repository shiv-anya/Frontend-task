import React, { Fragment } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import {Routes, Route, Navigate} from "react-router-dom"
import AddContactForm from './components/Contact/AddContactForm';
import UpdateContactForm from './components/Contact/UpdateContactForm';
import GraphAndMaps from './components/Graph/GraphAndMaps';
import ContactInfo from './components/Contact/ContactInfo';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/graph-and-maps" element={<GraphAndMaps />} />
        <Route path="/contacts" element={<Dashboard />} />
        <Route path="/add-contact" element={<AddContactForm />} />
        <Route path="/update-contact/:contactId" element={<UpdateContactForm />} />
        <Route path="/info/:contactId" element={<ContactInfo />} />
      </Routes>
    </Fragment>
  );
}

export default App;
