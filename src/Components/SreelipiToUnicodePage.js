import React, { useState,useEffect } from 'react';
import './SreelipiToUnicodePage.css';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const SreelipiToUnicodeConverter = () => {
  const [legacyText, setLegacyText] = useState('');
  const [unicodeText, setUnicodeText] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const array_one = [
    "&quot;","'","&#39;", "'", ">", " ।", "ÿ", "", "􀃛", "", "ç§", "§ç", "􀁞", "{", "{ç ", "ç{", "{ç", "ç{", "ôæ", "æô", " {# ", "#{", "{#", "#{",
    "¿â", "â¿", "􀀃", " ", "  ", " ", "C", "ଈ", "þ#", "ତ୍ମ", "Œ", "ତ୍ପ", "”", "ଦ୍ଦ", "b", "ଚ୍ଛ", "t", "ଟ୍ଟ", "􀁲", "ଦ୍ଦ",
    "􀁪", "ତ୍ମ", "􀁧", "ତ୍କ", "û", "ତ୍ସ", "􀁩", "ତ୍ତ୍ଵ", "½", "୍ମ", "􀁵", "ଦ୍ଭ", "", "↑", "#", "ି", "¸", "ମ୍ପ", "¹",
    "ମ୍ଫ", "¼", "ମ୍ମ", "Ú", "ସ୍ତ୍ର", "Í", "ଷ୍କ", "O", "କ୍ସ", "Ð", "ଷ୍ଣ", "À", "ର", "à", "ଲ", "Ü", "ହ", "􀁨", "ତ୍ତ",
    "Õ", "ସ୍ଖ", "–", "ର୍ଦ୍ଧ୍ୱ", "—", "ଦ୍ଭୁ", "L", "କ", "Q", "ଖ", "S", "ଗ", "W", "ଘ", "`", "ଚ", "a", "ଚ୍ଚ", "d", "ଛ",
    "f", "ଜ", "l", "ଝ", "s", "ଟ", "v", "ଠ", "Ý", "ଡ଼", "x", "ଡ", "Þ", "ଢ଼", "|", "ଢ", "~", "ଣ", "􀁢", "ଣ୍ଣ", "􀁦", "ତ",
    "†", "ତ", "$", "ଥ", "􀁰", "ଦ", "’", "ଦ", "􀁷", "ଧ", "™", "ଧ", "􀁺", "ନ", "œ", "ନ", "oe", "ନ", "¨", "ପ", "􀂄", "ପ",
    "ü", "ଫ", "¯", "ବ", "μ", "ଭ", "µ", "ଭ", "þ", "ମ", "􀃚", "ମ", "¾", "ଯ", "Á", "ଳ", "É", "ଶ", "􀂥", "ଶ", "Ì", "ଷ",
    "Ó", "ସ", "ä", "କ୍ଷ", "j", "ଜ୍ଞ", "o", "ଞ୍ଚ", "p", "ଞ୍ଛ", "¢", "ନ୍ଦ", "£", "ନ୍ଦ", "¤", "ନ୍ଧ", "ƒ", "ଣ୍ଡ", "º",
    "ମ୍ବ", "»", "ମ୍ଭ", "±", "ବ୍ଦ", "􀁳", "ଦ୍ଧ", "²", "ବ୍ଧ", "¡", "ନ୍ଥ", "×", "ସ୍ଥ", "􀁻", "ନ୍ନ", "􀁸", "ଧ୍ୟ",
    "š", "ଧ୍ୟ", "ø", "÷ë", "÷", "୍ର", "¿", "୍ୟ", "´", "୍ୱ", "Ô", "ସ୍କ", "§", "୍ନ", "ü", "ଫ", "u", "ଫ", "Û", "୍ସ",
    "^", "ଙ୍ଘ", "&", "", "􀃗", "", "􀂁", "", "􀀘 ", "", "􀃗", "", "Ÿ", "ନ୍ନ", "•", "ଦ୍ଧ", "ˆ", "ତ୍ତ", ";", "ନ୍ତ",
    "'ନ୍ତ", "';", ",ନ୍ତ", ",;", "0ନ୍ତ", "0;", "1ନ୍ତ", "1;", "2ନ୍ତ", "2;", "3ନ୍ତ", "3;", "4ନ୍ତ", "4;", "5ନ୍ତ", "5;",
    "6ନ୍ତ", "6;", "7ନ୍ତ", "7;", "8ନ୍ତ", "8;", "9ନ୍ତ", "9;", "􀁣", "ଣ୍ଡ", " ß", "ୟ", "ß", "ୟ", "Ö", "ସ୍ତ", "N", "କ୍ତ",
    "¦", "ନ୍ତ୍ର", "g", "ଜ୍ଜ", "©", "ପ୍ତ", "‡", "ତ୍କ", "Š", "ତ୍ମ", "‚", "ଣ୍ଣ", "Z", "ଙ୍କ", "\\", "ଙ୍ଖ", "\\è", "ଙ୍ଗ",
    "q", "ଞ୍ଜ", "+", "ଣ୍ଟ", "Î", "ଷ୍ଟ", "Ê", "ଶ୍ଚ", "Ï", "ଷ୍ଠ", "Å", "ଳ୍ପ", "Ñ", "ଷ୍ପ", "Ø", "ସ୍ପ", "Ù", "ସ୍ପ", " æ",
    "ା", "æ", "ା", "􀃂", "ା", " ା", " ।", " ç", "ି", "ÿ]", "ିଁ", "ç", "ି", "􀃃", "ି", "ê", "ୀ", "􀃆", "ୀ", " ë", "ୁ",
    "ë", "ୁ", "􀃇", "ୁ", "í", "ୂ", "õ ", "ୃ", "õ", "ୃ", "ô", "ଁ", "􀁥", "ଃ", "…", "ଃ", "ú", "୍‍", "ó", "ଂ", "]",
    "ିଁ", "â", "୍ଲ", "È", "୍ଳ", "úÿ", "୍‌", ' ̄', "ବ", '̄', "ବ", ' ́', "୍ୱ", '́', "୍ୱ", '̈', 'ପ', "A", "ଅ", "􀀤",
    "ଅ", "ଅା", "ଆ", "B", "ଇ", "􀀥", "ଇ", "D", "ଉ", "􀀧", "ଉ", "E", "ଊ", "J", "ଋ", "F", "ଏ", "G", "ଐ", "􀀪", "ଐ",
    "H", "ଓ", "I", "ଔ", "K", "ଔ", "0", "୦", "1", "୧", "2", "୨", "3", "୩", "4", "୪", "5", "୫", "6", "୬", "7", "୭", "8", "୮", "9", "୯",
  ];



  const replaceSymbols = (text) => {
    let modifiedSubstring = text;

    if (modifiedSubstring !== '') {
      for (let i = 0; i < array_one.length - 1; i += 2) {
        let idx = 0;
        while (idx !== -1) {
          modifiedSubstring = modifiedSubstring.replace(
            array_one[i],
            array_one[i + 1]
          );
          idx = modifiedSubstring.indexOf(array_one[i]);
        }
      }

      modifiedSubstring = modifiedSubstring.replace(
        /([{])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g,
        '$2$1'
      );
      modifiedSubstring = modifiedSubstring.replace(
        /([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g,
        '$2$3$1'
      );
      modifiedSubstring = modifiedSubstring.replace(
        /([{])([୍])([କଖଗଘଙଚଛଜଝଞଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳବଶଷସହକ୍ଷଜ୍ଞୟ])/g,
        '$2$3$1'
      );
      modifiedSubstring = modifiedSubstring.replace(/{ð/g, 'ୈ');
      modifiedSubstring = modifiedSubstring.replace(/{ା/g, 'ୋ');
      modifiedSubstring = modifiedSubstring.replace(/{ò/g, 'ୌ');
      modifiedSubstring = modifiedSubstring.replace(/{/g, 'େ');
      modifiedSubstring = modifiedSubstring.replace(
        /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)ö/g,
        'ö$1$2'
      );
      modifiedSubstring = modifiedSubstring.replace(
        /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])ö/g,
        'ö$1$2'
      );
      modifiedSubstring = modifiedSubstring.replace(/ö/g, 'ର୍');
      modifiedSubstring = modifiedSubstring.replace(
        /([ଂଁ])([ାିୀୁୂୃେୈୋୌ])/g,
        '$2$1'
      );
      modifiedSubstring = modifiedSubstring.replace(
        /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([ାିୀୁୂୃେୈୋୌଂଁ]*)}/g,
        '}$1$2ି'
      );
      modifiedSubstring = modifiedSubstring.replace(
        /([କଖଗଘଚଛଜଝଟଠଡଡ଼ଢଢ଼ଣତଥଦଧନପଫବଭମଯରଲଳଵଶଷସହକ୍ଷଜ୍ଞୟ])([୍])}/g,
        '}$1$2'
      );
      modifiedSubstring = modifiedSubstring.replace(/}/g, 'ର୍');
      modifiedSubstring = modifiedSubstring.replace(/ˆ/g, 'ତ୍ତ');
    }

    return modifiedSubstring;
  };

  const convertToUnicode = () => {
    if(legacyText === ''){
      toast('Please enter the required input', {
        icon: '✏️',
    });
    return;
    }
    let modifiedSubstring = legacyText;
    setUnicodeText('Conversion in progress...');

    const textSize = modifiedSubstring.length;
    let processedText = '';
    let cond1 = 0;
    let cond2 = 0;
    let chaleChalo = 1;
    const chunkSize = 6000;

    while (chaleChalo === 1) {
      cond1 = cond2;
      if (cond2 < textSize - chunkSize) {
        cond2 += chunkSize;
      } else {
        cond2 = textSize;
        chaleChalo = 0;
      }

      modifiedSubstring = legacyText.substring(cond1, cond2);
      modifiedSubstring = replaceSymbols(modifiedSubstring);

      processedText += modifiedSubstring;
      setUnicodeText(
        `Conversion in progress...\n\nConversion of ${cond2} characters out of ${textSize} completed.`
      );
    }

    setUnicodeText(processedText);
    toast.success('Conversion Successfull');
     // Save to local storage
     const historyKey = `sreelipiToUnicode_history`;
     const currentHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
     const newEntry = {
       date: new Date().toISOString(), // Use ISO format for consistency
       raw: legacyText,
       converted: unicodeText
     };
     const updatedHistory = [...currentHistory, newEntry];
     localStorage.setItem(historyKey, JSON.stringify(updatedHistory));
 
     setConversionHistory(updatedHistory);
  };

  useEffect(() => {
    setLegacyText('');
    setUnicodeText('');
    // Load conversion history from local storage
    const historyKey = `sreelipiToUnicode_history`;
    const savedHistory = JSON.parse(localStorage.getItem(historyKey)) || [];
    setConversionHistory(savedHistory);
  }, []);


  const handleOutputChange = (event) => {
    setUnicodeText(event.target.value);
  };

  const copyToClipboard = () => {
    toast.success('Copied');
    navigator.clipboard.writeText(unicodeText);
  };

  const removeLineBreaks = () => {
    toast.success('Removed');

    let result = unicodeText.replace(/\n+/g, (match) => {
      if (match === '\n\n') {
          return '\n';  // Replace double newline with single newline
      } else {
          return ' ';   // Replace single newline with space
      }
  });
    setUnicodeText(result);
  };


  const showConversionHistory = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const clearHistory = () => {
    const historyKey = `sreelipiToUnicode_history`;
    localStorage.removeItem(historyKey);
    setConversionHistory([]);
    toast.success('History cleared');
  };

  const clearInput = () => {
    setLegacyText('');
    setUnicodeText('');
  }

  const openTextEditor = () => {
    navigate('/text-editor', { state: { text: unicodeText } });
};

  return (
    <>
    <div className="container">
      <h1 className="header">Sreelipi to Unicode Converter</h1>

      <div className="textarea-container">
        <textarea
          id="legacy_text"
          className="textarea"
          placeholder="Enter Sreelipi text here..."
          value={legacyText}
          onChange={(e) => setLegacyText(e.target.value)}
          rows={20}
          cols={70}
        ></textarea>

        <textarea
          id="unicode_text"
          className="textarea"
          placeholder="Unicode text will appear here..."
          value={unicodeText}
          rows={20}
          cols={70}
          onChange={handleOutputChange}
        ></textarea>
      </div>

      <div className="buttons-container">
        <button className="button button-convert-unicode" onClick={convertToUnicode}>
          Convert to Unicode
        </button>

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

        <button onClick={openTextEditor} className="button-open-editor">Open in Text Editor</button>

        <button
          onClick={copyToClipboard}
          className="button-copy"
        >
          Copy Output
        </button>

        <button onClick={showConversionHistory} className="button-history">
          Show Conversion History
        </button>

      </div>
    </div>
    <div class='modal-container'>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          history={conversionHistory}
          clearHistory={clearHistory}
        />
      </div>
    </>
  );
};

export default SreelipiToUnicodeConverter;

