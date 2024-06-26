import React, { useState } from 'react'; // Import useState
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import NavButton from './ui/NavButton.jsx';
import NavMenu from './components/NavMenu.jsx';

function Root() {
  // Use the useState hook here
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <NavMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <NavButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* <CustomCursor /> */}
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
