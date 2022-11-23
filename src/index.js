import ReactDOM from 'react-dom';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import App from './Components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,
);
