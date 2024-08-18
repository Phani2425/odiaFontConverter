import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JoditEditorComponent from './JoditEditorComponent';
import './TextEditor.css';

const TextEditorPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [editorContent, setEditorContent] = useState(location.state?.text || '');

    const clearInput = () => {
        setEditorContent('');
    };

    const handleBack = () => {
        navigate(-1); // Navigate back to the previous page
    };


    return (
        <div className="text-editor-page">
            <div className="editor-container">
                <JoditEditorComponent
                    initialContent={editorContent}
                    onChange={setEditorContent}
                />

                <div className="editor-actions">
                    <button onClick={clearInput}>Clear</button>
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default TextEditorPage;
