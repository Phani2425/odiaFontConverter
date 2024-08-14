// App.js
import React, { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ConverterPage from './Components/ConverterPage';
import SreelipiToUnicodePage from './Components/SreelipiToUnicodePage'; // Import the new component
import Navbar from './Components/navbar'; // Import the new component



const App = () => {
    const [conversionType, setConversionType] = useState('');

    const handleConverterClick = (type) => {
        setConversionType(type);
    };

    return (
        <div>
            <Navbar onConverterClick={handleConverterClick}/>
            <Routes>
                <Route exact path="/" element={<LandingPage onConverterClick={handleConverterClick} />} />
                <Route exact path="/unicode-and-akruti-converter" element={<ConverterPage conversionType={conversionType} />} />
                <Route exact path="/sreelipi-to-unicode" element={<SreelipiToUnicodePage />} />
            </Routes>
        </div>
    );
};

export default App;