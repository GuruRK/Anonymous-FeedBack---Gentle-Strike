import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Applist from './Applist'
import LoginForm from './login'
import Feedback1 from "./feedbackpage/feedback1";
import FormLayoutDemo from "./Addlist/Addlist"

ReactDOM.render(
  

  <Router>
  <div >
    <Route exact path="/" component={App} />
    <Route path="/login" component={LoginForm} /> 
    <Route path="/Applist" component={Applist} />
    <Route path="/feedback1" component={Feedback1} />
    <Route path="/addlist" component={FormLayoutDemo} />
    

  </div>
</Router>


  ,document.getElementById("root")
);
registerServiceWorker();
