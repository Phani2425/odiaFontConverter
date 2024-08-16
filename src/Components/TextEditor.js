import React, { useState } from 'react';
import JoditEditor from 'jodit-react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TextEditor.css'; // Ensure this CSS file is imported

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
                <JoditEditor
                    value={editorContent}
                    config={{ readonly: false }} // Minimal config
                    className="jodit-container"
                />

                <div className="editor-actions">
                    <button onClick={handleBack}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default TextEditorPage;
