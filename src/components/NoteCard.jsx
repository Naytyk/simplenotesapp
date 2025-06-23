// components/NoteCard.jsx
import React from 'react';
import './NoteCard.css';

const NoteCard = ({ note, onDelete, onClick }) => {
  return (
    <div className="note-card" onClick={onClick}>
      <h3 className="note-title">{note.title || 'Untitled'}</h3>
      <p className="note-snippet">{note.content.slice(0, 50)}{note.content.length > 50 ? '...' : ''}</p>
      <button className="delete-btn" onClick={(e) => {
        e.stopPropagation();
        onDelete(note.id);
      }}>Delete</button>
    </div>
  );
};

export default NoteCard;
