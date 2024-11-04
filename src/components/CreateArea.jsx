import React, { useState } from 'react'
import './createarea.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {

    const [expand, setExpand] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const submitNote = (event) => {
        event.preventDefault()
        setNote({
            title: "",
            content: ""
        })
        props.onAdd(note)
    }

    const forExpand = () => {
        setExpand(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitNote}>
                {expand && (
                    <input
                        onChange={handleChange}
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        required
                    />
                )}
                <textarea
                    onClick={forExpand}
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note"
                    rows={expand ? 3 : 1}
                    value={note.content}
                    required
                ></textarea>
                <button type='submit'>
                    <Zoom in={expand}>
                        <Fab className="fab">
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </button>
            </form>
        </div>
    );
};

export default CreateArea