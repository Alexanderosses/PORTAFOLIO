import React from 'react';
import { createRoot } from 'react-dom';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App.jsx';
import { HashRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);
