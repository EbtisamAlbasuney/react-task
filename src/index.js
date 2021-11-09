import ReactDOM  from 'react-dom';
import Page from './components/page';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(<Page/> , document.querySelector('#root'));
