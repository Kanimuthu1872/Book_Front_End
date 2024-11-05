// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookHeader from "./components/BookHeader";
import BookList from "./components/Book/BookList";
import BookAdd from "./components/Book/BookAdd";
import BookView from "./components/Book/BookView";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BookEdit from "./components/Book/BookEdit";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <BookHeader/>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/bookedit/:id" element={<BookEdit />} />
                <Route path="/bookadd" element={<BookAdd />} />
                <Route path="/bookview/:id" element={<BookView />} /> {/* Note the parameter */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
