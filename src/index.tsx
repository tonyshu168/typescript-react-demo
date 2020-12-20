import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import Protal from './components/Protal';

const rootDOM = document.getElementById("root");
let helloRef: any;

// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" ref={node => helloRef = node}/>,
//   rootDOM,
//   () => {
//     console.log(helloRef);
//     console.log(ReactDOM.findDOMNode(helloRef));

//     const timer = setTimeout(() => {
//       (rootDOM as HTMLElement).firstChild?.remove();
//       // ReactDOM.unmountComponentAtNode(rootDOM as HTMLElement)
//     }, 3000);
//   }
// );

ReactDOM.render(<Protal />, rootDOM);
