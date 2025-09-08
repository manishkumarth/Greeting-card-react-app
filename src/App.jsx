import { useState } from 'react';
import './App.css';
import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';
import Nav from './components/nav';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
