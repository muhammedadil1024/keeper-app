import { useState } from 'react';
import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
      setNotes(prevNote => {
        return [...prevNote, newNote]
      })
    }

    const deleteNote = (id) => {
      setNotes(prevNote => {
        return prevNote.filter((noteItem, index) => {
          return index !== id;
        })
      })
    }

    return (
      <div className="container">
        <Header />
        <CreateArea className="create-note" onAdd={addNote} />
        <div className='note-display'>
          {
          notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content} 
              onDelete={deleteNote}
            />
          ))
        }
        </div>
        <Footer />
      </div>
    );
};

export default App;
