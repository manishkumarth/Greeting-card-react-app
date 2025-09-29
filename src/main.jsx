import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Loader from './components/loader';
import TemplateContext from './context/templateContext';
import BackgroundUpdate from './context/bgcontext.jsx';
// import PopUpModal from './components/popupmodal';
createRoot(document.getElementById('root')).render(
  <TemplateContext>
    <BackgroundUpdate>
      <App />
    </BackgroundUpdate>
  </TemplateContext>
);
