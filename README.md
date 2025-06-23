# 📝 Notes App (Frontend Only)

A simple, modern notes app built with **React** and **vanilla CSS**, storing all data in the browser using `localStorage`. Create, edit, and delete notes — no signup or backend needed.

---

## 🚀 Features

- ✨ Clean, flat UI with responsive layout
- 📝 Create and edit notes using a Google Docs-style editor
- 📁 All notes stored locally in the browser
- 🗑️ Hover to delete notes
- 🔁 Real-time update of note list

---

## 🗂️ File Structure

/src
├── components/
│ ├── Header.jsx # Top bar with logo and Create button
│ └── NoteCard.jsx # Note preview cards on the homepage
│
├── pages/
│ ├── Home.jsx # Displays list of all notes
│ └── Create.jsx # Editor page to create or edit notes
│
├── App.jsx # Main component with routing
├── index.js # Entry point
├── styles/
│ └── main.css # Global and component styles


---

## 🧠 How It Works

- On `'/'`, all notes from `localStorage` are shown in a grid.
- Click "Create" to go to `'/create'` page and start writing a new note.
- Notes have a file name input and large textarea.
- When saved, the note is added or updated in `localStorage`.
- Clicking an existing note opens it in the editor for editing.

---

## 🧪 Tech Used

- ⚛️ React (with `react-router-dom`)
- 💾 localStorage (for persistent notes)
- 🎨 Vanilla CSS

---

## ✅ To Run Locally

```bash
npm install
npm run dev
