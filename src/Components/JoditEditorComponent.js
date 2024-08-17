import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const JoditEditorComponent = ({ initialContent, onChange }) => {
  const editor = useRef(null);

  const config = {
    readonly: false,
    height: 550,
    enterMode: 'BR',
    toolbarAdaptive: false,
    cleanHTML: {
      preserveViewport: false
    },
    events: {
      paste: function (e) {
        e.preventDefault();
        const text = (e.originalEvent || e).clipboardData.getData('text/plain');
        const sanitizedText = text.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
        this.selection.insertHTML(sanitizedText);
      }
    }
  };

  const formatContent = (content) => {
    return content.replace(/\n/g, '<br>').replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
  };

  return (
    <JoditEditor
      ref={editor}
      value={formatContent(initialContent)}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => onChange(newContent)}
    />
  );
};

export default JoditEditorComponent;
