import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './FlashScreen.css';

const FlashScreen = ({ onFinished }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinished(); // Signal the parent component that the flash screen is done
        }, 3000); // Duration of the flash screen (3 seconds)
        
        return () => clearTimeout(timer); // Cleanup the timer
    }, [onFinished]);

    return (
        <motion.div 
            className="flash-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
        >
            <img src="Unnatipathe_logo.png" alt="Unnatipathe Logo" className="flash-logo" height={50}/>
        </motion.div>
    );
};

export default FlashScreen;
