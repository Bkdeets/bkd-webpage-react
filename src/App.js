import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Current from './components/Current/Current';

function App() {
  const [activeItem, setActiveItem] = useState(null);
    const handleMenuItemChange = (item) => {
        setActiveItem(item)
    }

  return (
    <div className="App">
      <Main />
      <Portfolio handleMenuItemChange={handleMenuItemChange} />
      <div className="mt-4 w-full">
        {activeItem}
      </div>
    </div>
  );
}

export default App;
