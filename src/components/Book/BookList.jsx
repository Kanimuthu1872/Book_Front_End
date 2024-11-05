import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 
export default function BookList() {
    const baseUrl = "http://localhost:8081/books";
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [allBooks, setAllBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
 
    function loadAllBooks() {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data);
                setFilteredBooks(data);
                console.log(data);
            });
    }
 
    useEffect(() => {
        loadAllBooks();
    }, []);
 
    function handleSearch(event) {
        setSearchTerm(event.target.value);
        const filtered = allBooks.filter(book =>
            book.bookTitle.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredBooks(filtered);
    }
 
    function handleDelete(id) {
        fetch(`${baseUrl}/${id}`, { method: "DELETE" })
            .then(() => loadAllBooks());
    }
 
    function handleView(id) {
        const selectedBook = allBooks.find(book => book.id === id);
        navigate(`/bookview/${id}`, { state: selectedBook });
    }
 
    function handleAdd() {
        navigate("/bookadd");
    }
 
    let mappedBooks = filteredBooks.map((eachBook) => (
        <tr key={eachBook.id}>
            <td>{eachBook.id}</td>
            <td>{eachBook.bookTitle}</td>
            <td>{eachBook.authorId}</td>
            <td>{eachBook.bookPrice}</td>
            <td>
                <button className="btn btn-warning btn-spin" onClick={() => handleView(eachBook.id)}>
                    <span className="material-symbols-outlined">👁️</span>
                </button>
            </td>
            <td>
                <button className="btn btn-primary btn-spin" onClick={handleAdd}>➕</button>
            </td>
            <td>
                <button className="btn btn-danger btn-spin" onClick={() => handleDelete(eachBook.id)}>
                    <span className="material-symbols-outlined">🗑️</span>
                </button>
            </td>
            <td>
            <button className="btn btn-primary btn-spin" onClick={() => navigate(`/bookedit/${eachBook.id}`)}>🖊️</button>
 
            </td>
        </tr>
    ));
 
    return (
        <div className="container m-1">
            <h3>LIST OF BOOKS</h3>
            <div className="form-control-group">
                <label htmlFor="searchTerm" className="form-label">Search Title:</label>
                <input
                    type="text"
                    id="searchTerm"
                    placeholder="🔍 Enter search string"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <table className="table table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>Book ID</th>
                        <th>Book Title</th>
                        <th>Author ID</th>
                        <th>Book Price</th>
                        <th colSpan="4" className="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>{mappedBooks}</tbody>
            </table>
        </div>
    );
}
 