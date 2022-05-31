import { useEffect, useState } from "react";
import "./App.css";
import ListNotes from "./components/ListNotes";
import { nanoid } from "nanoid";
import Searchbar from "./components/Searchbar";
function App() {
  const [searchtext, setsearchtext] = useState("");
  const [notes, setnotes] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("reactnotes");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("reactnotes", JSON.stringify(notes));
  }, [notes]);
  const searchnote = (e) => {
    setsearchtext(e);
  };
  const addnotefunc = (text) => {
    const date = new Date();
    const newnote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleTimeString() + " " + date.toLocaleDateString(),
    };
    const list2 = [...notes, newnote];
    setnotes(list2);
  };

  const deletenote = (id) => {
    const list = notes.filter((note) => note.id !== id);
    setnotes(list);
  };

  return (
    <div className="App">
      <Searchbar searchnote={searchnote}></Searchbar>
      <ListNotes
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchtext)
        )}
        addnotefunc={addnotefunc}
        deletenote={deletenote}
      ></ListNotes>
    </div>
  );
}

export default App;
