import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Kcauth from './kcauth.js';
import Loginbtn from './loginbtn';

//React Render before authentication
ReactDOM.render(<App />, document.getElementById('root'));

//console.log(Loginbtn.status);

let clickbtn = false;

if(clickbtn){
    ReactDOM.render(<Kcauth />);
}


