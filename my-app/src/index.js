import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );


  
ReactDOM.render( 
<BrowserRouter>
<App />
  </BrowserRouter>
  , document.getElementById('root'));



// <React.StrictMode>
// <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// </React.StrictMode>

// reportWebVitals();