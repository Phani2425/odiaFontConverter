import React, { useState, useEffect } from 'react';
import './TextProcessor.css';

const OdiaTextProcessor = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [inputWordCount, setInputWordCount] = useState(0);
  const [outputWordCount, setOutputWordCount] = useState(0);

  useEffect(() => {
    countWords(inputText, setInputWordCount);
  }, [inputText]);

  useEffect(() => {
    countWords(outputText, setOutputWordCount);
  }, [outputText]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOutputChange = (event) => {
    setOutputText(event.target.value);
  };

  const removeLineBreaks = () => {
    const processedText = inputText.replace(/[\r\n]+/g, ' ');
    setOutputText(processedText);
  };

  const countWords = (text, setWordCount) => {
    const words = text.trim().split(/\s+/);
    const odiaWordCount = words.filter(word => /[\u0B00-\u0B7F]+/.test(word)).length;
    setWordCount(odiaWordCount);
  };

  return (
    <div className="odia-text-processor-container">
      <h2 className="header">Odia Text Processor</h2>

      <div className="text-boxes-container">
        <div className="text-box">
          <textarea
            className="textarea"
            placeholder="Type or paste Odia text here..."
            value={inputText}
            onChange={handleInputChange}
          />
          <p className="word-count">Input Word Count: {inputWordCount}</p>
        </div>

        <div className="text-box">
          <textarea
            className="textarea"
            placeholder="Processed Odia text will appear here..."
            value={outputText}
            onChange={handleOutputChange}
          />
          <p className="word-count">Output Word Count: {outputWordCount}</p>
        </div>
      </div>

      <div className="my-buttons-container">
        <button className="mybutton" onClick={removeLineBreaks}>Remove Line Breaks</button>
      </div>
    </div>
  );
};

export default OdiaTextProcessor;
