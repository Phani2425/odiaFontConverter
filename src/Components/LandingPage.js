// LandingPage.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './LandingPage.css';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IoIosArrowUp } from "react-icons/io";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiLayers } from "react-icons/fi";
import { IconContext } from "react-icons";

const LandingPage = ({ onConverterClick }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <header>
                <h1>Odia Unicode Converter</h1>
                <p>Convert various Odia fonts to Unicode easily and accurately.</p>
            </header>

            <main>
                <section className="converter-section">
                    <div className="converter-card" onClick={() => onConverterClick('akrutiToUnicode')}>
                    <IconContext.Provider value={{ size:"3em",color: 'black', className: "icons" }}>
                
                   <FiLayers />
                  
                    </IconContext.Provider>
                    
                        <h2>ODIA AKRUTI TO UNICODE</h2>
                        <p>Convert text from legacy fonts to Unicode simply and quickly.</p>
                    </div>
                    <div className="converter-card" onClick={() => onConverterClick('unicodeToAkruti')}>
                    <IconContext.Provider value={{ size:"3em",color: 'black', className: "icons" }}>
                
                   <FiLayers />
                  
                    </IconContext.Provider>
                        <h2>ODIA UNICODE TO AKRUTI</h2>
                        <p>Effortlessly convert Odia Unicode text to Akruti font.</p>
                    </div>
                    <div className="converter-card" onClick={() => onConverterClick('sreelipiToUnicode')}>
                        <IconContext.Provider value={{ size:"3em", color: 'black', className: "icons" }}>
                            <FiLayers />
                        </IconContext.Provider>
                        <h2>SREELIPI TO UNICODE CONVERTER</h2>
                        <p>Convert Sreelipi text to Unicode accurately and easily.</p>
                    </div>
                </section>

                <section className="about-section">
                    <Slider {...sliderSettings}>
                        <div className="about-slide">
                            <h2>About Our Converter</h2>
                            <p>Designed for accuracy and simplicity in Odia font conversions.</p>
                        </div>
                        <div className="about-slide">
                            <h2>Why Choose Us?</h2>
                            <p>User-friendly interface for seamless font conversions.</p>
                        </div>
                        <div className="about-slide">
                            <h2>Get Started</h2>
                            <p>Experience easy and accurate font conversions today.</p>
                        </div>
                    </Slider>
                </section>

                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {[
                            {
                                question: "What is Unicode?",
                                answer: "Unicode is a standard for consistent character encoding across platforms."
                            },
                            {
                                question: "How does the converter work?",
                                answer: "It translates legacy Odia fonts to Unicode format for easy sharing."
                            },
                            {
                                question: "Is the converter free?",
                                answer: "Yes, it is completely free to use without limitations."
                            },
                            {
                                question: "Can I convert large texts?",
                                answer: "Yes, our converter handles large texts efficiently."
                            },
                            {
                                question: "Is my data safe?",
                                answer: "We do not store any user data; your privacy is ensured."
                            },
                            {
                                question: "What formats can I use?",
                                answer: "Supports Akruti, Sreelipi, GIST, Apranta, Sambad, and ASCII."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <h3>{faq.question}</h3>
                                    <span>{activeFAQ === index ? '-' : '+'}</span>
                                </div>
                                {activeFAQ === index && (
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="cta-section">
                    <h2>READY TO DO THIS</h2>
                    <h1>Let's get to work</h1>
                    <button>Contact Us</button>
                </section>
            </main>

            <button id="mode-toggle" className="bottom-left" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun size={20}/> : <FaMoon  size={20}/>}
            </button>
            {showScrollTop && (
                <button id="scroll-top" className="bottom-right" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <IoIosArrowUp />
                </button>
            )}
        </div>
    );
};

export default LandingPage;
