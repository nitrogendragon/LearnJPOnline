import React from 'react'//enables JSX
import ReactDOM from "react-dom"
import App from "./Components/App"
import App2 from "./Components/App2"
import App3 from "./Components/App3/App3"
import App4 from "./Components/App4/App4"
import App5 from "./Components/App5/App5"
import StateApp from "./Components/StateApp/StateApp"
import LifeCycleApp from "./Components/LifeCycleApp/LifeCycleApp"
import DFA from "./Components/DataFetchApp/DataFetchApp"
import FormsApp from "./Components/FormsApp/FormsApp"
ReactDOM.render(
    <><FormsApp /></>, document.getElementById('root'));
    //MyOrderedList(), document.getElementById('root')); //This is also valid though probably not bprac.
