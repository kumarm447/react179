//index.js 
import React from 'react'
import ReactDOM from 'react-dom'

//Import Bootstrap Package
import './../node_modules/bootstrap/dist/css/bootstrap.css'

//Provider Component
import { Provider } from 'react-redux';

//Store
import store from './Store/index.js'

//Import Home Module into INDEX_Module
import App from './components/App.js'


//ReactDOM.render(<App />,document.getElementById('root'));

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));
