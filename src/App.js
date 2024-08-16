// App.js
import React, { useState } from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ConverterPage from './Components/ConverterPage';
import SreelipiToUnicodePage from './Components/SreelipiToUnicodePage'; // Import the new component
import OdiaTextProcessor from './Components/TextProcessor'
import Navbar from './Components/navbar'; // Import the new component
import TextEditor from './Components/TextEditor'; // Import the new component
import { Toaster } from 'react-hot-toast';



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
                <Route exact path='/text-process' element={<OdiaTextProcessor/>} />
                <Route path="/text-editor" element={<TextEditor />} />
            </Routes>
            <Toaster/>
        </div>
    );
};

export default App;