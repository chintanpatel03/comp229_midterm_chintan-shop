// App.js
import React, { useState } from 'react';
import './App.css';
import NewShopPage from './pages/NewShopPage'; // Import the NewShopForm component
import NewProductPage from './pages/NewProductPage'; // Import the NewProductForm component

function App() {
  const [showNewShopForm, setShowNewShopForm] = useState(false);
  const [showNewProductForm, setShowNewProductForm] = useState(false);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => { setShowNewShopForm(true); setShowNewProductForm(false); }}>
              New Shop Form
            </a>
          </li>
          <li>
            <a href="#" onClick={() => { setShowNewProductForm(true); setShowNewShopForm(false); }}>
              New Product Form
            </a>
          </li>
        </ul>
      </nav>

      {showNewShopForm && <NewShopPage />}
      {showNewProductForm && <NewProductPage />}
    </div>
  );
}

export default App;

