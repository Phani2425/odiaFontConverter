// App.js
import React, { useState } from 'react';
import './App.css';
import LandingPage from './Components/LandingPage';
import ConverterPage from './Components/ConverterPage';
import SreelipiToUnicodePage from './Components/SreelipiToUnicodePage'; // Import the new component

const App = () => {
    const [showConverter, setShowConverter] = useState(false);
    const [conversionType, setConversionType] = useState('');

    const handleConverterClick = (type) => {
        setConversionType(type);
        setShowConverter(true);
    };

    return (
        <div className="App">
            {!showConverter ? (
                <LandingPage onConverterClick={handleConverterClick} />
            ) : (
                conversionType === 'sreelipiToUnicode' ? (
                    <SreelipiToUnicodePage />
                ) : (
                    <ConverterPage conversionType={conversionType} />
                )
            )}
        </div>
    );
};

export default App;
