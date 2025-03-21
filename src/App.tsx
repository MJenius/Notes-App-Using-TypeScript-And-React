import './App.css'
import { useState } from 'react'

type Note = {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [notes,setNotes] = useState<
  Note[]
  >([
    {
      id: 1,
      title: 'note title 1',
      content: 'content 1'
    },
    {
      id: 2,
      title: 'note title 2',
      content: 'content 2'
    },
    {
      id: 3,
      title: 'note title 3',
      content: 'content 3'
    },
    {
      id: 4,
      title: 'note title 4',
      content: 'content 4'
    }
  ]);

  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  
  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    console.log("Title: ",title)
    console.log("Content: ",content)

    const newNote: Note = {
      id: notes.length +1,
      title: "",
      content: ""
    };

    setNotes([newNote,...notes]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(event)=>handleSubmit(event)}  
      >
        <input
        placeholder='title'
        onChange={(event)=>
          setTitle(event.target.value)
        }
        required/>
        <textarea
        placeholder='Content'
        rows={10}
        onChange={(event)=> {
          setContent(event.target.value)
        }}
        required/>
        <button type='submit'>
          Add Note
        </button>
        </form>
        <div className='notes-grid'>
          {notes.map((note)=> (
            <div className='note-item'>
              <div className='notes-header'>
                <button>x</button>
              </div>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
    </div>
  )

}

export default App