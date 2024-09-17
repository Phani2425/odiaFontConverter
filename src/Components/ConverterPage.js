// // ConverterPage.js
// import React, { useEffect, useState } from 'react';
// import './ConverterPage.css'; // Your styles
// import Modal from './Modal';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// // Maps for conversion
// const oneCharMap = {
//   "୦": "0", "୧": "1", "୨": "2", "୩": "3", "୪": "4", "୫": "5", "୬": "6", "୭": "7", "୮": "8", "୯": "9",
//   "୰": "#", "ଽ": "$", "ଌ": "&", "ଡ଼": "Wÿ", "ଢ଼": "Xÿ", "ଥି": "[ô", "ଧି": "]ô", "ଜ୍ଞ": "m", "ଅ": "@",
//   "ଇ": "A", "ଈ": "B", "ଉ": "C", "ଊ": "D", "ଋ": "E", "ୠ": "F", "ଏ": "G", "ଐ": "H", "ଓ": "I", "ଔ": "J",
//   "କ": "K", "ଖ": "L", "ଗ": "M", "ଘ": "N", "ଙ": "O", "ଚ": "P", "ଛ": "Q", "ଜ": "R", "ଝ": "S", "ଞ": "T",
//   "ଟ": "U", "ଠ": "V", "ଡ": "W", "ଢ": "X", "ଣ": "Y", "ତ": "Z", "ଥ": "[", "ଦ": "\\", "ଧ": "]", "ନ": "^",
//   "ପ": "_", "ଫ": "`", "ବ": "a", "ଭ": "b", "ମ": "c", "ଯ": "~", "ୟ": "d", "ର": "e", "ଲ": "f", "ଶ": "g",
//   "ଷ": "h", "ସ": "i", "ହ": "j", "ଳ": "k", "ା": "û", "ି": "ò", "ୀ": "ú", "ୁ": "ê", "ୂ": "í", "ୃ": "é",
//   "ଃ": "ü", "େ": "ù", "ଁ": "ñ", "ଂ": "õ", "୍": "þ", "।": "û", "ୗ": "ø", "ୌ": "ùø", "ୖ": "÷", "ୈ": "ù÷",
//   "ୋ": "ùା", "ଆ": "@û",
// };

// const halantThreeCharMap = {
//   "୍ରୁ": "î", "୍ରୂ": "ï"
// };

// const halantTwoCharMap = {
//   "୍କ": "Ñ", "୍ଖ": "Ò", "୍ଗ": "Ó", "୍ଚ": "Ô", "୍ଜ": "Õ", "୍ଝ": "Ö", "୍ଠ": "×", "୍ଡ": "Ø", "୍ଣ": "Ù",
//   "୍ଥ": "Ú", "୍ଧ": "Û", "୍ନ": "Ü", "୍ପ": "Ý", "୍ଫ": "Þ", "୍ୱ": "ß", "୍ମ": "£", "୍ର": "â", "୍ଲ": "ä",
//   "୍ଭ": "å", "୍ଳ": "æ", "୍ସ": "ç", "୍ୟ": "è"
// };

// const ngyaThreeCharMap = {
//   "ଞ୍ଚ": "*", "ଞ୍ଜ": "¬"
// };

// const taFiveCharMap = {
//   "ତ୍ସ୍ନ": "œ"
// };

// const taThreeCharMap = {
//   "ତ୍ତ": "©", "ତ୍ଥ": "Î", "ତ୍ମ": "™", "ତ୍ପ": "š", "ତ୍ସ": "›"
// };

// const nnaThreeCharMap = {
//   "ଣ୍ଟ": "<", "ଣ୍ଣ": "‰", "ଣ୍ଡ": "Š", "ଣ୍ଠ": "Œ"
// };

// const maThreeCharMap = {
//   "ମ୍ପ": "μ", "ମ୍ମ": "¹", "ମ୍ବ": "´", "ମ୍ଭ": "¸"
// };

// const kaFiveCharMap = {
//   "କ୍ଷ୍ଣ": "Ð", "କ୍ଟ୍ର": "p"
// };

// const kaThreeCharMap = {
//   "କ୍ତ": "q", "କ୍ସ": "r", "କ୍ଷ": "l", "କ୍ଟ": "o", "କ୍ର": ":"
// };

// const daThreeCharMap = {
//   "ଦ୍ଧ": "¡", "ଦ୍ଘ": "¢", "ଦ୍ଭ": "n"
// };

// const gaThreeCharMap = {
//   "ଗ୍ଦ": "s", "ଗ୍ଧ": "t"
// };

// const wonThreeCharMap = {
//   "ଙ୍କ": "u", "ଙ୍ଖ": "v", "ଙ୍ଗ": "w", "ଙ୍ଘ": "x"
// };

// const paThreeCharMap = {
//   "ପ୍ପ": "®", "ପ୍ତ": "¯", "ପ୍ସ": "°"
// };

// const laThreeCharMap = {
//   "ଲ୍କ": "º", "ଲ୍ଗ": "»"
// };

// const saThreeCharMap = {
//   "ଶ୍ଛ": "¼", "ଶ୍ଚ": "½"
// };

// const saaThreeCharMap = {
//   "ଷ୍ଣ": "¾", "ଷ୍ପ": "¿", "ଷ୍ଫ": "À", "ଷ୍ଟ": "Á", "ଷ୍ଠ": "Â", "ଷ୍କ": "Ã"
// };

// const saaaFiveCharMap = {
//   "ସ୍ତ୍ର": "È"
// };

// const saaaThreeCharMap = {
//   "ସ୍କ": "Ä", "ସ୍ଖ": "Å", "ସ୍ପ": "Æ", "ସ୍ଫ": "Ç", "ସ୍ତ": "É", "ସ୍ୱ": "Ê"
// };

// const laaThreeCharMap = {
//   "ଳ୍କ": "Ë", "ଳ୍ପ": "Ì", "ଳ୍ଫ": "Í", "ଳ୍ଳ": "Ï"
// };

// const jaThreeCharMap = {
//   "ଜ୍ଝ": "|", "ଜ୍ଜ": "{"
// };

// const chaThreeCharMap = {
//   "ଚ୍ଚ": "y", "ଚ୍ଛ": "z"
// };

// const taaThreeCharMap = {
//   "ଟ୍ଟ": "…"
// };

// const dhaThreeCharMap = {
//   "ଧ୍ଯ": "¤"
// };

// const naThreeCharMap = {
//   "ନ୍ଦ": "¦", "ନ୍ଧ": "§", "ନ୍ତ୍ର": "ª", "ନ୍ତ": "«"
// };

// const baThreeCharMap = {
//   "ବ୍ଦ": "±", "ବ୍ଧ": "²"
// };

// const thaTwoCharMap = {
//   "ଥି": "[ô"
// };

// const allMaps = [
//   halantThreeCharMap,
//   halantTwoCharMap,
//   ngyaThreeCharMap,
//   taFiveCharMap,
//   taThreeCharMap,
//   nnaThreeCharMap,
//   maThreeCharMap,
//   kaFiveCharMap,
//   kaThreeCharMap,
//   daThreeCharMap,
//   gaThreeCharMap,
//   wonThreeCharMap,
//   paThreeCharMap,
//   laThreeCharMap,
//   saThreeCharMap,
//   saaThreeCharMap,
//   saaaFiveCharMap,
//   saaaThreeCharMap,
//   laaThreeCharMap,
//   jaThreeCharMap,
//   chaThreeCharMap,
//   taaThreeCharMap,
//   dhaThreeCharMap,
//   naThreeCharMap,
//   baThreeCharMap,
//   thaTwoCharMap,
//   oneCharMap
// ];

// const ConverterPage = ({ conversionType }) => {
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [conversionHistory, setConversionHistory] = useState([]);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setInputText('');
//     setOutputText('');
//     // Load conversion history from local storage
//     const historyKey = `${conversionType}_history`;
//     const savedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
//     setConversionHistory(savedHistory);
//   }, [conversionType]);

//   const copyToClipboard = () => {
//     toast.success('Copied');
//     navigator.clipboard.writeText(outputText);
//   };

//   const removeLineBreaks = () => {
//     toast.success('Removed');
//     let result = outputText.replace(/\n+/g, (match) => {
//       if (match === '\n\n') {
//         return '\n';  // Replace double newline with single newline
//       } else {
//         return ' ';   // Replace single newline with space
//       }
//     });
//     setOutputText(result);
//   };

//   const unicodeToAkruti = (unicodeText) => {
//     let result = '';
//     let i = 0;

//     while (i < unicodeText.length) {
//       let found = false;
//       for (let map of allMaps) {
//         for (let len = Math.min(5, unicodeText.length - i); len >= 1; len--) {
//           const slice = unicodeText.slice(i, i + len);
//           if (map[slice]) {
//             result += map[slice];
//             i += len;
//             found = true;
//             break;
//           }
//         }
//         if (found) break;
//       }
//       if (!found) {
//         result += unicodeText[i];
//         i++;
//       }
//     }

//     return result;
//   };

//   const akrutiToUnicode = (akrutiText) => {
//     let result = '';
//     let i = 0;

//     while (i < akrutiText.length) {
//       let found = false;
//       for (let map of allMaps) {
//         for (let len = Math.min(5, akrutiText.length - i); len >= 1; len--) {
//           const slice = akrutiText.slice(i, i + len);
//           const unicodeChar = Object.keys(map).find(key => map[key] === slice);
//           if (unicodeChar) {
//             result += unicodeChar;
//             i += len;
//             found = true;
//             break;
//           }
//         }
//         if (found) break;
//       }
//       if (!found) {
//         result += akrutiText[i];
//         i++;
//       }
//     }

//     return result;
//   };

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   const handleConvert = () => {
//     let convertedText = '';
//     if (inputText === '') {
//       toast('Please enter the required input', {
//         icon: '✏️',
//       });
//       return;
//     }
//     if (conversionType === 'akrutiToUnicode') {
//       convertedText = akrutiToUnicode(inputText);
//     } else if (conversionType === 'unicodeToAkruti') {
//       convertedText = unicodeToAkruti(inputText);
//     }
//     setOutputText(convertedText);
//     toast.success('Conversion Successful');

//     // Save to local storage
//     const historyKey = `${conversionType}_history`;
//     const currentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
//     const newEntry = {
//       date: new Date().toISOString(), // Use ISO format for consistency
//       raw: inputText,
//       converted: convertedText
//     };
//     const updatedHistory = [...currentHistory, newEntry];
//     localStorage.setItem(historyKey, JSON.stringify(updatedHistory));

//     setConversionHistory(updatedHistory);
//   };

//   const handleOutputChange = (event) => {
//     setOutputText(event.target.value);
//   };

//   const showConversionHistory = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const clearInput = () => {
//     setInputText('');
//     setOutputText('');
//   };

//   const openTextEditor = () => {
//     navigate('/text-editor', { state: { text: outputText } });
//   };

//   const clearHistory = () => {
//     const historyKey = `${conversionType}_history`;
//     localStorage.removeItem(historyKey);
//     setConversionHistory([]);
//     toast.success('History cleared');
//   };

//   return (
//     <div class='top'>
//       <div className="container">
//         <h1 className="header">
//           {conversionType === 'akrutiToUnicode' ? 'Akruti to Unicode Converter' : 'Unicode to Akruti Converter'}
//         </h1>

//         <div className="textarea-container">
//           <textarea
//             className="textarea"
//             placeholder="Input text here..."
//             value={inputText}
//             onChange={handleInputChange}
//           />

//           <textarea
//             className="textarea"
//             placeholder="Converted text..."
//             value={outputText}
//             onChange={handleOutputChange}
//           />
//         </div>

//         <div className="buttons-container">
//           {conversionType === 'akrutiToUnicode' ? (<button
//             className="button button-convert-unicode"
//             onClick={handleConvert}
//           >
//             Convert to Unicode
//           </button>) : (<button
//             className="button button-convert-akruti"
//             onClick={handleConvert}
//           >
//             Convert to Akruti
//           </button>)}

//           <button
//             onClick={clearInput}
//             className="button-clear-input"
//           >
//             Clear Input
//           </button>

//           <button
//             onClick={removeLineBreaks}
//             className="button-remove-linebreaks"
//           >
//             Remove Line Breaks
//           </button>


//           <button
//             onClick={copyToClipboard}
//             className="button-copy"
//           >
//             Copy Output
//           </button>

//           <button onClick={openTextEditor} className="button-open-editor">Open in Text Editor</button>

//           <button onClick={showConversionHistory} className="button-history">
//             Show Conversion History
//           </button>

//         </div>
//       </div>
//       <div class='modal-container'>
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           history={conversionHistory}
//           clearHistory={clearHistory}
//         />
//       </div>
//     </div>
//   );
// };

// export default ConverterPage;

import React, { useEffect, useState } from 'react';
import './ConverterPage.css'; // Your styles
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ConverterPage = ({ conversionType }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInputText('');
    setOutputText('');
    // Load conversion history from local storage
    const historyKey = `${conversionType}_history`;
    const savedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
    setConversionHistory(savedHistory);
  }, [conversionType]);

  const copyToClipboard = () => {
    toast.success('Copied');
    navigator.clipboard.writeText(outputText);
  };

  const removeLineBreaks = () => {
    toast.success('Removed');
    let result = outputText.replace(/\n+/g, (match) => {
      if (match === '\n\n') {
        return '\n';  // Replace double newline with single newline
      } else {
        return ' ';   // Replace single newline with space
      }
    });
    setOutputText(result);
  };

  const unicodeToAkruti = (unicodeText) => {
    const conversionMap = new Map([
      ['ଅ', '@'], ['ଆ', 'Aaý'], ['ଇ', 'A'], ['ଈ', 'B'], ['ଉ', 'C'], ['ଊ', 'D'],
      ['ଋ', 'E'], ['ୠ', 'F'], ['ଌ', 'G'], ['ୡ', 'H'], ['ଏ', 'I'], ['ଐ', 'J'],
      ['ଓ', 'K'], ['ଔ', 'L'], ['କ', 'K'], ['ଖ', 'L'], ['ଗ', 'M'], ['ଘ', 'N'],
      ['ଙ', 'O'], ['ଚ', 'P'], ['ଛ', 'Q'], ['ଜ', 'R'], ['ଝ', 'S'], ['ଞ', 'T'],
      ['ଟ', 'U'], ['ଠ', 'V'], ['ଡ', 'W'], ['ଢ', 'X'], ['ଣ', 'Y'], ['ତ', 'Z'],
      ['ଥ', '['], ['ଦ', '\\'], ['ଧ', ']'], ['ନ', '^'], ['ପ', '_'], ['ଫ', '`'],
      ['ବ', 'a'], ['ଭ', 'b'], ['ମ', 'c'], ['ଯ', 'd'], ['ର', 'e'], ['ଲ', 'f'],
      ['ଳ', 'g'], ['ଵ', 'h'], ['ଶ', 'i'], ['ଷ', 'j'], ['ସ', 'k'], ['ହ', 'l'],
      ['କ୍ଷ', 'm'], ['ଜ୍ଞ', 'n'], ['ୟ', 'o'], ['ା', 'û'], ['ି', 'ú'], ['ୀ', 'ò'],
      ['ୁ', 'ê'], ['ୂ', 'ë'], ['ୃ', 'é'], ['େ', 'ù'], ['ୈ', 'ù÷'], ['ୋ', 'ùû'],
      ['ୌ', 'ùø'], ['ଂ', 'õ'], ['ଃ', 'ü'], ['ଁ', 'ñ'], ['୍', 'þ'], ['।', 'ö'],
      ['୦', '0'], ['୧', '1'], ['୨', '2'], ['୩', '3'], ['୪', '4'], ['୫', '5'],
      ['୬', '6'], ['୭', '7'], ['୮', '8'], ['୯', '9'], ['ଡ଼', 'Xÿ'], ['ଢ଼', 'Xÿþl'],
      ['ୱ', 'ୱ'], ['ଜ୍ଞ', 'mý']
    ]);
  
    const sortedKeys = Array.from(conversionMap.keys()).sort((a, b) => b.length - a.length);
  
    let akrutiText = unicodeText;
  
    for (const key of sortedKeys) {
      const value = conversionMap.get(key);
      akrutiText = akrutiText.replace(new RegExp(key, 'g'), value);
    }
  
    // Handle special cases
    akrutiText = akrutiText
      .replace(/([KMLWXeZa])þl/g, (_, p1) => p1 + 'þl')
      .replace(/([KMLWXZ])ù/g, (_, p1) => p1 + 'ù')
      .replace(/ùû/g, 'ùû')
      .replace(/ୟ/g, 'o')
      .replace(/^ù/g, 'I')
      .replace(/\sù/g, ' I')
      .replace(/mþ/g, 'r')
      .replace(/Kþ/g, 'q')
      .replace(/Mþ/g, 'N')
      .replace(/Wþ/g, 'X')
      .replace(/\^þ/g, '¬')
      .replace(/Zþ/g, '¤')
      .replace(/\^û/g, '¨')
      .replace(/Uþ/g, '')
      .replace(/Wÿ/g, 'Xÿ')
      .replace(/aò/g, 'aú')
      .replace(/Zò/g, 'Zú')
      .replace(/^ò/g, '^ú')
      .replace(/\s^ò/g, ' ^ú')
      .replace(/gò/g, 'gú')
      .replace(/cò/g, 'cú')
      .replace(/eò/g, 'eú');
  
    return akrutiText;
  };
  

  const akrutiToUnicode = (akrutiText) => {
    let modified_substring = akrutiText;
    var text_array = new Array(

      " û", " ।", // purnacheda
      "ö" , " ।" , // purnacheda
      "÷÷÷", "", //
      // double accented - AkrutiOriSarala
      "£" , "୍ମ" , // ma phala
      "à" , "୍ମ" , // ma phala
      "á" , "୍ମୃ" , // (halanta)m-Rû
      "â" , "୍ର" , // ra
      "ã" , "୍ର" , // reph
      "ä" , "୍ଲ" , // la phala
      "å" , "୍ଭ" , // halanta- bha
      "æ" , "୍ଳ" , // halanta-La
      "ç" , "୍ୱ" , // ba phala
      "è" , "୍ସ" , // halanta-sa
      "ý", "୍ୟ" , // ja phala
      "¥", "୍ୟ" , // ja phala
      "ó", "ିଁ" , // i kara
      
      "Iß" , "ୱ", //wa
      "Wÿ" , "ଡ଼" , // Da with bindu
      "Xÿ" , "ଢ଼" , // Dha with bindu
      "Pÿ" , "ଚ" , // c
      "[ô" , "ଥି" , // thi
      "]ô" , "ଧି" , // dhi
      "Lô" , "ଖି" , // khi
      "cô", "ତ୍ମ" , // tma
      "_ô", "ତ୍ପ" , // tma
      
      "û" , "ା" , // aa kara
      "ò" , "ି" , // i kara
      "ú" , "ୀ" , // dirgha i kara
      "ê" , "ୁ" , // u kara
      "ë" , "ୁ" , // u kara
      "ì" , "ୂ" , // dirgha i kara
      "í" ,  "ୂ" , // dirgha u kara
      "é" , "ୃ" , // ru kara
      
      "ñ", "ଁ" , // chandrabindu
      "õ", "ଂ" , // anuswara
      "ü", "ଃ" , // bisarga
      "þ", "୍" , //halanta
      "¨", "୍‌" , // halanta with zero width non-joiner
      //"¨", "୍‍" , // halanta with zero width joiner
      "1" , "୧" , // Numeric 1
      "2" , "୨" , // Numeric 2
      "3" , "୩" , // Numeric 3
      "4" , "୪" , // Numeric 4
      "5" , "୫" , // Numeric 5
      "6" , "୬" , // Numeric 6
      "7" , "୭" , // Numeric 7
      "8" , "୮" , // Numeric 8
      "9" , "୯" , // Numeric 9
      "0" , "୦" , // Numeric 10
      "#" , "୰" , // late
      "$" , "ଽ" , 
      "&" , "ଌ" , // lu
      "*" , "ଞ୍ଚ" , // nc
      "" ,  "ଞ୍ଚ" , // nc
      "î" , "୍ରୁ" , // halanta-r-u
      "ï" , "୍ରୂ" , // halanta-r-dirgha u
      
      "Ð" , "କ୍ଷ୍ଣ" , // khya-N
      "Ñ" , "୍କ" ,  // halanta-k
      "Ò" , "୍ଖ" , // halanta-kh
      "Ó" , "୍ଗ" , // halanta-g
      "Ô" , "୍ଚ" , // halanta-c
      "Õ" , "୍ଜ" , // halanta-j
      "Ö" , "୍ଟ" , // halanta-T
      "×" , "୍ଠ" , // halanta-Th
      "Ø" , "୍ଡ" , // halanta-D
      "Ù" , "୍ଣ" , // halanta-N
      "Ú" , "୍ଥ" , // halanta-th
      "Û" , "୍ଧ" , // halanta-dh
      "Ü" , "୍ନ" , // halanta-n
      "Ý" , "୍ପ" , // halanta-p
      "Þ" , "୍ଫ" , // halanta-ph
      "ß" , "୍ୱ" , // halanta-b
      
      "<" , "ଣ୍ଟ" , // NT
      "" , "ଣ୍ଟ" , // NT
      "…" , "ଟ୍ଟ" , // TT
      "μ" , "ମ୍ପ" , // mp
      "µ" , "ମ୍ପ" , // mp
      "¶" , "ମ୍ଫ" , // mph
      "‰" , "ଣ୍ଣ" , // NN
      "Š" , "ଣ୍ଡ" , // ND
      
      "Œ" , "ଣ୍ଠ" , // NTh
      "™" , "ତ୍ମ" , // tm
      "š" , "ତ୍ପ" , // tp
      "›" , "ତ୍ସ" , // ts
      "œ" , "ତ୍ସ୍ନ" , // t-s-n
      "Ÿ" , "ଦ୍ଦ" , // d-dh
      
      
      "{" , "ଜ୍ଜ" , // jj
      "|" , "ଜ୍ଝ" , // j-jh
      "}" , "କ୍ର" , // kr
      
      "¡" , "ଦ୍ଧ" , // d-dh
      "¢" , "ଦ୍ଘ" , // d-gh
      "¤" , "ଧ୍ୟ" , // dhya
      "¦" , "ନ୍ଦ" , // nd
      "§" , "ନ୍ଧ" , // ndh
      "©" , "ତ୍ତ" , // tt
      "" , "ତ୍ତ" , // tt
      "ª" , "ନ୍ତ୍ର" , // ntr (jantra)
      "«" , "ନ୍ତ" , // nt
      "¬" , "ଞ୍ଜ" , // nj
      "ƒ" , "ଞ୍ଝ" , // njh
      "®" , "ପ୍ପ" , // pp
      "¯" , "ପ୍ତ" , // pt
      
      "°", "ପ୍ସ" , // ps
      "±" , "ବ୍ଦ" , // bd
      "²" , "ବ୍ଧ" , // bdh
      "´" , "ମ୍ବ" , // mb
      "¸" , "ମ୍ଭ" , // mbh
      " ̧" , "ମ୍ଭ", // ***mbha
      "̧" , "ମ୍ଭ", // mbha
      "¹" , "ମ୍ମ" , // mm
      "º" , "ଲ୍କ" , // lk
      "»" , "ଲ୍ଗ" , // lg
      "¼" , "ଶ୍ଛ" , // Nch
      "½" , "ଶ୍ଚ" , // S-ch (talabya sa - ca)
      "¾" , "ଷ୍ଣ" , // sh-N (murdhanya sa - Na)
      "¿" , "ଷ୍ପ" , // sh-p (murdhanya sa - pa)
      
      "À" , "ଷ୍ଫ" , // sh-ph (murdhanya sa - pha)
      "Á" , "ଷ୍ଟ" , // sh-T (murdhanya sa - Ta)
      "Â" , "ଷ୍ଠ" , // sh-Th (murdhanya sa - Tha)
      "Ã" , "ଷ୍କ" , // sh-k (murdhanya sa - ka)
      "Ä" , "ସ୍କ" , // s-k
      "Å" , "ସ୍ଖ" , // sh-kh
      "Æ" , "ସ୍ପ" , // sp
      "Ç" , "ସ୍ଫ" , // sph
      "È" , "ସ୍ତ୍ର" , // str
      "É" , "ସ୍ତ" , // st
      "Ê" , "ସ୍ୱ" , // sb
      "Ë" , "ଳ୍କ" , // lk
      "Ì" , "ଳ୍ପ" , // Lp
      "Í" , "ଳ୍ଫ" , // Lph
      "Î" , "ତ୍ଥ" , // t-th
      "" , "ତ୍ଥ" , // t-th
      "Ï" , "ଳ୍ଳ" , // L-L
      
      "@ା" , "ଆ" , // aa
      "@" , "ଅ" , // a
      "A" , "ଇ" , // i
      "B" , "ଈ" , // dirgha i
      "C" , "ଉ" , // u
      "D" , "ଊ" , // dirgha u
      "E" , "ଋ" , // R
      "F" , "ୠ" , // RR
      "G" , "ଏ" , // e
      "H" , "ଐ" , // ai
      "I" , "ଓ" , // o
      "J" , "ଔ" , // au 
      
      "K" , "କ" , // k
      "L" , "ଖ" , // kh
      "M" , "ଗ" , // g
      "N" , "ଘ" , // gh
      "O" , "ଙ" ,
      
      "P" , "ଚ",  // c
      "Q" , "ଛ", // ch
      "R" , "ଜ", // j
      "S" , "ଝ", // jh
      "T" , "ଞ", // Nya
      
      "U", "ଟ" , // T
      "V", "ଠ" , // Th
      "W", "ଡ" , // D
      "X", "ଢ" , // Dh
      "Y", "ଣ" , // N
      "Z" , "ତ" , // t
      "[" , "ଥ" , // th
      "\\" , "ଦ" , // d
      "]" , "ଧ" , // dh
      "^", "ନ" , // n
      "~" , "ଯ" , // y
      "_" , "ପ", // p
      "`" , "ଫ", // ph
      "a" , "ବ", // b
      "b" , "ଭ", // bh
      "c" , "ମ", // m
      "d" , "ୟ" , // y
      "e" , "ର" , // r
      "f" , "ଲ" , // l
      "g" , "ଶ" , // S (talabya sa)
      "h" , "ଷ" , // sh (murdhanya sa)
      "i" , "ସ" , // s
      "j" , "ହ" , // h
      "k" , "ଳ" , // L
      "l" , "କ୍ଷ" , // ksh
      "m" , "ଜ୍ଞ" , // gya
      "n" , "ଦ୍ଭ" , // d-bh
      "o" , "କ୍ଟ" , // kT
      "p" , "କ୍ଟ୍ର" , // kTr
      "q" , "କ୍ତ" , // kt
      "r" , "କ୍ସ" , // ks
      "s" , "ଗ୍ଦ" , // gd
      "t" , "ଗ୍ଧ" , // gdh
      "u" , "ଙ୍କ" , 
      "v" , "ଙ୍ଖ" ,
      "w" , "ଙ୍ଗ" ,
      "x" , "ଙ୍ଘ" ,
      "y" , "ଚ୍ଚ" ,
      "z" , "ଚ୍ଛ" ,
      " ̄", "ପ୍ତ",
      " ́", "ମ୍ବ",
      "‹", "ଣ୍ଢ" , // ndha
      "ଏø", " ଐ", // ai
      "୍ଯ" , "୍ୟ", // ja phala
      " ̈", "୍‍", // halanta with ZWJ
      "ଅା", "ଆ" // aa
      //"" , "",
      //"" , ""
      ) 

    const text_array_length = text_array.length;

    for (let input_symbol_idx = 0; input_symbol_idx < text_array_length - 1; input_symbol_idx += 2) {
      let idx = 0;
      while (idx !== -1) {
        modified_substring = modified_substring.replace(text_array[input_symbol_idx], text_array[input_symbol_idx + 1]);
        idx = modified_substring.indexOf(text_array[input_symbol_idx]);
      }
    }

    // Apply additional replacements
    modified_substring = modified_substring.replace(/([ù])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g, "$2$1");
    modified_substring = modified_substring.replace(/([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g, "$2$3$1");
    modified_substring = modified_substring.replace(/([ù])([୍])([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥନପଫବଭମୟରଲବୱଶଷସହକ୍ଷଡ଼ଳ])/g, "$2$3$1");
    modified_substring = modified_substring.replace(/ùø/g, "ୌ");
    modified_substring = modified_substring.replace(/ùା/g, "ୋ");
    modified_substring = modified_substring.replace(/ù÷/g, "ୈ");
    modified_substring = modified_substring.replace(/ù/g, "େ");
    modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)à/g, "ð$1$2");
    modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ð/g, "ð$1$2");
    modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])à/g, "ð$1$2");
    modified_substring = modified_substring.replace(/([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ð/g, "ð$1$2");
    modified_substring = modified_substring.replace(/ð/g, "ର୍");
    modified_substring = modified_substring.replace(/([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g, "$2$1");

    return modified_substring;
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConvert = () => {
    let convertedText = '';
    if (inputText === '') {
      toast('Please enter the required input', {
        icon: '✏️',
      });
      return;
    }
    if (conversionType === 'akrutiToUnicode') {
      convertedText = akrutiToUnicode(inputText);
    } else if (conversionType === 'unicodeToAkruti') {
      convertedText = unicodeToAkruti(inputText);
    }
    setOutputText(convertedText);
    toast.success('Conversion Successful');

    // Save to local storage
    const historyKey = `${conversionType}_history`;
    const currentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
    const newEntry = {
      date: new Date().toISOString(),
      raw: inputText,
      converted: convertedText
    };
    const updatedHistory = [...currentHistory, newEntry];
    localStorage.setItem(historyKey, JSON.stringify(updatedHistory));

    setConversionHistory(updatedHistory);
  };

  const handleOutputChange = (event) => {
    setOutputText(event.target.value);
  };

  const showConversionHistory = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const clearInput = () => {
    setInputText('');
    setOutputText('');
  };

  const openTextEditor = () => {
    navigate('/text-editor', { state: { text: outputText } });
  };

  const clearHistory = () => {
    const historyKey = `${conversionType}_history`;
    localStorage.removeItem(historyKey);
    setConversionHistory([]);
    toast.success('History cleared');
  };

  return (
    <div className='top'>
      <div className="container">
        <h1 className="header">
          {conversionType === 'akrutiToUnicode' ? 'Akruti to Unicode Converter' : 'Unicode to Akruti Converter'}
        </h1>

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
          {conversionType === 'akrutiToUnicode' ? (
            <button
              className="button button-convert-unicode"
              onClick={handleConvert}
            >
              Convert to Unicode
            </button>
          ) : (
            <button
              className="button button-convert-akruti"
              onClick={handleConvert}
            >
              Convert to Akruti
            </button>
          )}

          <button
            onClick={clearInput}
            className="button-clear-input"
          >
            Clear Input
          </button>

          <button
            onClick={removeLineBreaks}
            className="button-remove-linebreaks"
          >
            Remove Line Breaks
          </button>

          <button
            onClick={copyToClipboard}
            className="button-copy"
          >
            Copy Output
          </button>

          <button onClick={openTextEditor} className="button-open-editor">Open in Text Editor</button>

          <button onClick={showConversionHistory} className="button-history">
            Show Conversion History
          </button>

        </div>
      </div>
      <div className='modal-container'>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          history={conversionHistory}
          clearHistory={clearHistory}
        />
      </div>
    </div>
  );
};

export default ConverterPage;