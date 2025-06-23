import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editingId = searchParams.get('id');

  useEffect(() => {
    if (editingId) {
      const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
      const note = existingNotes.find(n => n.id === editingId);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }
  }, [editingId]);

  const handleSave = () => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    let updatedNotes;

    if (editingId) {
      updatedNotes = existingNotes.map(note =>
        note.id === editingId ? { ...note, title, content } : note
      );
    } else {
      const newId = `note-${Date.now()}-${existingNotes.length}`;
      updatedNotes = [...existingNotes, { id: newId, title, content }];
    }

    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/simplenotesapp/');
  };

  return (
    <>
      <Header />
      <div className="editor-container">
        <input
          className="title-input"
          placeholder="File name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="note-textarea"
          placeholder="Start writing here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="save-btn" onClick={handleSave}>Save</button>
      </div>
    </>
  );
};

export default Create;
