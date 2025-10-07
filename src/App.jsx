import './App.css';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import Nav from './components/nav';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorPage from './pages/EditorPage';
import PopUpModal from './components/popupmodal';
import Loader from './components/loader';

function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/editPage" element={ <EditorPage /> } />
      </Routes>
      <Loader />
      <PopUpModal />
    </BrowserRouter>
  );
}
export default App;
