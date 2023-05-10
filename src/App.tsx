import React, { Fragment } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import {Routes, Route} from "react-router-dom"
import AddContactForm from './components/Contact/AddContactForm';
import UpdateContactForm from './components/Contact/UpdateContactForm';
import GraphAndMaps from './components/Graph/GraphAndMaps';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/graph-and-maps" element={<GraphAndMaps />} />
        <Route path="/contacts" element={<Dashboard />} />
        <Route path="/add-contact" element={<AddContactForm />} />
        <Route path="/update-contact" element={<UpdateContactForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
