import * as React from "react";
import * as ReactDOM from "react-dom";
import 'antd-mobile/dist/antd-mobile.css';
// import './index.css';

// import alert from './components/Alert';
// import Protal from './components/Protal';
// import operation from './components/Operation';
import prompt from './components/Prompt';

const rootDOM = document.getElementById("root");

// ReactDOM.render(<Protal />, rootDOM);

// alert('title', 'hello alert')
// operation([{text: 'dssd'}, {text: 'dddsss'}]);
prompt('title', '你多大了？')
