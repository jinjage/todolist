import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {XProvider} from './Context.js';

window.appReflesh='';
window.refleshgetAllTodosFromApi=''; 

window.getAllTodosFromApiFunction = '';

window.appRefleshFunction ='';

window.YeniDuyuruModdleShow = '';
window.YeniDuyuruModdleClose = '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <XProvider>
    <App />
  </XProvider>,
  
);
reportWebVitals();

/*

ReactDOM.render(
  <XProvider>
    <App />
  </XProvider>,
  document.getElementById('root')
);

context siz
<React.StrictMode>
    <App />
  </React.StrictMode>


*/