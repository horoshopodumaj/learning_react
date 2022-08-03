import ReactDOM from "react-dom";
import App from './components/app';
import './index.css';

import { restaurants } from './fixtures';
import store from './redux/store';

ReactDOM.render(
    <App restaurants={restaurants} />, 
    document.getElementById('root')
);
