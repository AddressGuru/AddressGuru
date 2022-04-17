import React from 'react';
import App from './App';
import ReactDOM from "react-dom"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
ReactDOM.render(
  <BrowserRouter>
<App/>
  </BrowserRouter>
,
  document.getElementById('root')
);

