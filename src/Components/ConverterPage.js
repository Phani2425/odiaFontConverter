// ConverterPage.js
import React, { useState } from 'react';
import './ConverterPage.css'; // Your styles

// Maps for conversion
const oneCharMap = {
  "୦": "0", "୧": "1", "୨": "2", "୩": "3", "୪": "4", "୫": "5", "୬": "6", "୭": "7", "୮": "8", "୯": "9",
  "୰": "#", "ଽ": "$", "ଌ": "&", "ଡ଼": "Wÿ", "ଢ଼": "Xÿ", "ଥି": "[ô", "ଧି": "]ô", "ଜ୍ଞ": "m", "ଅ": "@", 
  "ଇ": "A", "ଈ": "B", "ଉ": "C", "ଊ": "D", "ଋ": "E", "ୠ": "F", "ଏ": "G", "ଐ": "H", "ଓ": "I", "ଔ": "J", 
  "କ": "K", "ଖ": "L", "ଗ": "M", "ଘ": "N", "ଙ": "O", "ଚ": "P", "ଛ": "Q", "ଜ": "R", "ଝ": "S", "ଞ": "T", 
  "ଟ": "U", "ଠ": "V", "ଡ": "W", "ଢ": "X", "ଣ": "Y", "ତ": "Z", "ଥ": "[", "ଦ": "\\", "ଧ": "]", "ନ": "^", 
  "ପ": "_", "ଫ": "`", "ବ": "a", "ଭ": "b", "ମ": "c", "ଯ": "~", "ୟ": "d", "ର": "e", "ଲ": "f", "ଶ": "g", 
  "ଷ": "h", "ସ": "i", "ହ": "j", "ଳ": "k", "ା": "û", "ି": "ò", "ୀ": "ú", "ୁ": "ê", "ୂ": "í", "ୃ": "é", 
  "ଃ": "ü", "େ": "ù", "ଁ": "ñ", "ଂ": "õ", "୍": "þ", "।": "û", "ୗ": "ø", "ୌ": "ùø", "ୖ": "÷", "ୈ": "ù÷", 
  "ୋ": "ùା", "ଆ": "@û",
};

const halantThreeCharMap = {
  "୍ରୁ": "î", "୍ରୂ": "ï"
};

const halantTwoCharMap = {
  "୍କ": "Ñ", "୍ଖ": "Ò", "୍ଗ": "Ó", "୍ଚ": "Ô", "୍ଜ": "Õ", "୍ଝ": "Ö", "୍ଠ": "×", "୍ଡ": "Ø", "୍ଣ": "Ù", 
  "୍ଥ": "Ú", "୍ଧ": "Û", "୍ନ": "Ü", "୍ପ": "Ý", "୍ଫ": "Þ", "୍ୱ": "ß", "୍ମ": "£", "୍ର": "â", "୍ଲ": "ä", 
  "୍ଭ": "å", "୍ଳ": "æ", "୍ସ": "ç", "୍ୟ": "è"
};

const ngyaThreeCharMap = {
  "ଞ୍ଚ": "*", "ଞ୍ଜ": "¬"
};

const taFiveCharMap = {
  "ତ୍ସ୍ନ": "œ"
};

const taThreeCharMap = {
  "ତ୍ତ": "©", "ତ୍ଥ": "Î", "ତ୍ମ": "™", "ତ୍ପ": "š", "ତ୍ସ": "›"
};

const nnaThreeCharMap = {
  "ଣ୍ଟ": "<", "ଣ୍ଣ": "‰", "ଣ୍ଡ": "Š", "ଣ୍ଠ": "Œ"
};

const maThreeCharMap = {
  "ମ୍ପ": "μ", "ମ୍ମ": "¹", "ମ୍ବ": "´", "ମ୍ଭ": "¸"
};

const kaFiveCharMap = {
  "କ୍ଷ୍ଣ": "Ð", "କ୍ଟ୍ର": "p"
};

const kaThreeCharMap = {
  "କ୍ତ": "q", "କ୍ସ": "r", "କ୍ଷ": "l", "କ୍ଟ": "o", "କ୍ର": ":"
};

const daThreeCharMap = {
  "ଦ୍ଧ": "¡", "ଦ୍ଘ": "¢", "ଦ୍ଭ": "n"
};

const gaThreeCharMap = {
  "ଗ୍ଦ": "s", "ଗ୍ଧ": "t"
};

const wonThreeCharMap = {
  "ଙ୍କ": "u", "ଙ୍ଖ": "v", "ଙ୍ଗ": "w", "ଙ୍ଘ": "x"
};

const paThreeCharMap = {
  "ପ୍ପ": "®", "ପ୍ତ": "¯", "ପ୍ସ": "°"
};

const laThreeCharMap = {
  "ଲ୍କ": "º", "ଲ୍ଗ": "»"
};

const saThreeCharMap = {
  "ଶ୍ଛ": "¼", "ଶ୍ଚ": "½"
};

const saaThreeCharMap = {
  "ଷ୍ଣ": "¾", "ଷ୍ପ": "¿", "ଷ୍ଫ": "À", "ଷ୍ଟ": "Á", "ଷ୍ଠ": "Â", "ଷ୍କ": "Ã"
};

const saaaFiveCharMap = {
  "ସ୍ତ୍ର": "È"
};

const saaaThreeCharMap = {
  "ସ୍କ": "Ä", "ସ୍ଖ": "Å", "ସ୍ପ": "Æ", "ସ୍ଫ": "Ç", "ସ୍ତ": "É", "ସ୍ୱ": "Ê"
};

const laaThreeCharMap = {
  "ଳ୍କ": "Ë", "ଳ୍ପ": "Ì", "ଳ୍ଫ": "Í", "ଳ୍ଳ": "Ï"
};

const jaThreeCharMap = {
  "ଜ୍ଝ": "|", "ଜ୍ଜ": "{"
};

const chaThreeCharMap = {
  "ଚ୍ଚ": "y", "ଚ୍ଛ": "z"
};

const taaThreeCharMap = {
  "ଟ୍ଟ": "…"
};

const dhaThreeCharMap = {
  "ଧ୍ଯ": "¤"
};

const naThreeCharMap = {
  "ନ୍ଦ": "¦", "ନ୍ଧ": "§", "ନ୍ତ୍ର": "ª", "ନ୍ତ": "«"
};

const baThreeCharMap = {
  "ବ୍ଦ": "±", "ବ୍ଧ": "²"
};

const thaTwoCharMap = {
  "ଥି": "[ô"
};

const allMaps = [
  halantThreeCharMap,
  halantTwoCharMap,
  ngyaThreeCharMap,
  taFiveCharMap,
  taThreeCharMap,
  nnaThreeCharMap,
  maThreeCharMap,
  kaFiveCharMap,
  kaThreeCharMap,
  daThreeCharMap,
  gaThreeCharMap,
  wonThreeCharMap,
  paThreeCharMap,
  laThreeCharMap,
  saThreeCharMap,
  saaThreeCharMap,
  saaaFiveCharMap,
  saaaThreeCharMap,
  laaThreeCharMap,
  jaThreeCharMap,
  chaThreeCharMap,
  taaThreeCharMap,
  dhaThreeCharMap,
  naThreeCharMap,
  baThreeCharMap,
  thaTwoCharMap,
  oneCharMap
];

const ConverterPage = ({ conversionType }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const removeLineBreaks = () => {
    setOutputText(outputText.replace(/\n/g, ' '));
  };

  const unicodeToAkruti = (unicodeText) => {
    let result = '';
    let i = 0;

    while (i < unicodeText.length) {
      let found = false;
      for (let map of allMaps) {
        for (let len = Math.min(5, unicodeText.length - i); len >= 1; len--) {
          const slice = unicodeText.slice(i, i + len);
          if (map[slice]) {
            result += map[slice];
            i += len;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) {
        result += unicodeText[i];
        i++;
      }
    }

    return result;
  };

  const akrutiToUnicode = (akrutiText) => {
    let result = '';
    let i = 0;

    while (i < akrutiText.length) {
      let found = false;
      for (let map of allMaps) {
        for (let len = Math.min(5, akrutiText.length - i); len >= 1; len--) {
          const slice = akrutiText.slice(i, i + len);
          const unicodeChar = Object.keys(map).find(key => map[key] === slice);
          if (unicodeChar) {
            result += unicodeChar;
            i += len;
            found = true;
            break;
          }
        }
        if (found) break;
      }
      if (!found) {
        result += akrutiText[i];
        i++;
      }
    }

    return result;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConvert = () => {
    let convertedText = '';
    if (conversionType === 'akrutiToUnicode') {
      convertedText = akrutiToUnicode(inputText);
    } else if (conversionType === 'unicodeToAkruti') {
      convertedText = unicodeToAkruti(inputText);
    }
    
    setOutputText(convertedText);
    setConversionHistory([...conversionHistory, { input: inputText, output: convertedText }]);
  };

  const handleOutputChange = (event) => {
    setOutputText(event.target.value);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        setInputText(text);
      };
      reader.readAsText(uploadedFile);
    } else {
      alert('Please upload a .txt file.');
    }
  };

  const showConversionHistory = () => {
    alert(conversionHistory.map(entry => `Input: ${entry.input}\nOutput: ${entry.output}`).join('\n\n'));
  };

  return (
    <div className="container">
      <h1 className="header">
        {conversionType === 'akrutiToUnicode' ? 'Akruti to Unicode Converter' : 'Unicode to Akruti Converter'}
      </h1>

      <div className="file-upload-container">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="file-upload"
        />
        <p>Or enter text below:</p>
      </div>

      <div className="textarea-container">
        <textarea
          className="textarea"
          placeholder="Input text here..."
          value={inputText}
          onChange={handleInputChange}
        />

        <textarea
          className="textarea"
          placeholder="Converted text..."
          value={outputText}
          onChange={handleOutputChange}
        />
      </div>

      <div className="buttons-container">
        <button
          className="button button-convert-unicode"
          onClick={handleConvert}
        >
          Convert to Unicode
        </button>
        <button
          className="button button-convert-akruti"
          onClick={handleConvert}
        >
          Convert to Akruti
        </button>
        
        <button
          onClick={copyToClipboard}
          className="button-copy"
        >
          Copy Output
        </button>
        <button
          onClick={removeLineBreaks}
          className="button-remove-linebreaks"
        >
          Remove Line Breaks
        </button>

        <button onClick={showConversionHistory} className="button-history">
          Show Conversion History
        </button>

        <button onClick={() => { window.location.href = '/'; }} className="button-home">
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default ConverterPage;
