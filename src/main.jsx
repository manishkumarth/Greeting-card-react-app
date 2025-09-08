import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Loader from './components/loader';
import TemplateContext from './context/templateContext';
// import PopUpModal from './components/popupmodal';
createRoot(document.getElementById('root')).render(
  <TemplateContext>
    {/* <PopUpModal />
    <Loader /> */}
    <App />
  </TemplateContext>
);
