import React, { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const deleteNote = (id) => {
    const updated = notes.filter(note => note.id !== id);
    setNotes(updated);
    localStorage.setItem('notes', JSON.stringify(updated));
  };

  const handleClick = (id) => {
    navigate(`/create?id=${id}`);
  };

  return (
    <>
      <Header />
      <div className="notes-grid">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={deleteNote}
            onClick={() => handleClick(note.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
