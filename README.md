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

.
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Top bar with logo and Create button
│   │   └── NoteCard.jsx       # Note preview cards
│   │
│   ├── pages/
│   │   ├── Home.jsx           # Displays all saved notes
│   │   └── Create.jsx         # Editor to create/edit notes
│   │
│   ├── styles/
│   │   └── main.css           # Base and component styles
│   │
│   ├── App.jsx                # App-level routing and structure
│   └── index.js               # Entry point
│
├── package.json
└── README.md

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
