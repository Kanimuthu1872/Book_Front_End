import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BookEdit() {
    const baseUrl = `http://localhost:8081/books`; // Base URL for the books API
    const authorsUrl = "http://localhost:3000/authors"; // URL to fetch authors
    let { id } = useParams(); // Extracting the book ID from URL parameters
    let navigate = useNavigate(); // Hook for navigation

    const [bookData, setBookData] = useState({
        id: "",
        bookTitle: "",
        authorId: "",
        bookPrice: 0
    });

    const [bookErrorData, setBookErrorData] = useState({
        bookTitle: true,
        authorId: true,
        bookPrice: true,
    });

    const [authors, setAuthors] = useState([]); // State to store the list of authors

    useEffect(() => {
        // Fetching book data based on the ID
        fetch(`${baseUrl}/${id}`)
            .then((res) => res.json())
            .then((data) => setBookData(data));

        // Fetching the authors list
        fetch(authorsUrl)
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch((error) => console.error("Error fetching authors:", error));
    }, [id]); // Fetch data when the component mounts or when the ID changes

    function handleFormChange(event) {
        const { name, value } = event.target;
        
        setBookErrorData({
            ...bookErrorData,
            [name]: event.target.validity.valid,
        });

        setBookData({ ...bookData, [name]: value });
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        fetch(`${baseUrl}/${id}`, {
            method: "PUT",
            body: JSON.stringify(bookData),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(() => navigate("/")); // Navigate back to the list after updating
    }

    return (
        <div className="container m-5">
            <div className="card">
                <form onSubmit={handleFormSubmit}>
                    <div className="card-header bg-primary text-light">
                        <h3>UPDATE A BOOK</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="bTitle" className="form-label">
                                Book Title:
                            </label>
                            <input
                                type="text"
                                id="bTitle"
                                placeholder="Enter Book Title"
                                className="form-control"
                                value={bookData.bookTitle}
                                required
                                name="bookTitle"
                                onChange={handleFormChange}
                            />
                            <div className="text-danger small">
                                {bookErrorData.bookTitle ? "" : "Book Title is Required!"}
                            </div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="authorId" className="form-label">
                                Author:
                            </label>
                            <select
                                id="authorId"
                                name="authorId"
                                className="form-control"
                                required
                                onChange={handleFormChange}
                                value={bookData.authorId}
                            >
                                <option value="">Select Author</option>
                                {authors.map((author) => (
                                    <option key={author.id} value={author.id}>
                                        {author.name} {/* Assuming author object has "id" and "name" */}
                                    </option>
                                ))}
                            </select>
                            <div className="text-danger small">
                                {bookErrorData.authorId ? "" : "Author is Required!"}
                            </div>
                        </div>

                        <div className="form-control-group m-1">
                            <label htmlFor="bookPrice" className="form-label">
                                Book Price:
                            </label>
                            <input
                                type="number"
                                id="bookPrice"
                                placeholder="Enter Book Price"
                                className="form-control"
                                value={bookData.bookPrice}
                                required
                                name="bookPrice"
                                onChange={handleFormChange}
                            />
                            <div className="text-danger small">
                                {bookErrorData.bookPrice ? "" : "Book Price is Required!"}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-primary text-light">
                        <button type="submit" className="btn btn-light text-primary btn-spin">
                            UPDATE
                        </button>
                        <button type="reset" className="btn btn-light text-primary mx-5 btn-spin">
                            CLEAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
