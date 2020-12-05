import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Current from './components/Current/Current';
import bioRockPhoto from "./assets/MeWithLogo.png"
import beachWhite from "./assets/beachWhiteGrad.png"
import rock from "./assets/rocks.png"



function App() {
  const [activeItem, setActiveItem] = useState(null);
    const handleMenuItemChange = (item) => {
        setActiveItem(item)
    }

  const rockPhoto = <img
    className="object-cover absoulute absolute-center top-0 left-0"
    src={beachWhite}
  />

  return (
    <div className="App">
      {/* <div className="mt-4 w-full absolute top-0 left-0 z-0">
        {activeItem ? activeItem : rockPhoto}
      </div> */}
      <Main className="z-10" />
      <Portfolio className="z-10" handleMenuItemChange={handleMenuItemChange} />
      {activeItem}
    </div>
  );
}

export default App;
