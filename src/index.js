import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaDaApp from './TaDaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaDaApp />, document.getElementById('root'));
registerServiceWorker();
