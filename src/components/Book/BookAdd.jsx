import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookAdd() {
    const baseUrl = "http://localhost:8081/books";
    const authorsUrl = "http://localhost:3000/authors"; // URL to fetch authors (adjust based on your API)
    const navigate = useNavigate();
    
    const [bookData, setBookData] = useState({
        id: "",
        bookTitle: "",
        authorId: "",
        bookPrice: 0,
    });

    const [bookErrorData, setBookErrorData] = useState({
        id: true,
        bookTitle: true,
        authorId: true,
        bookPrice: true,
    });

    const [authors, setAuthors] = useState([]); // State to hold list of authors

    useEffect(() => {
        // Fetch authors from API
        fetch(authorsUrl)
            .then((res) => res.json())
            .then((data) => setAuthors(data))
            .catch((error) => console.error("Error fetching authors:", error));
    }, []);

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
        if (Object.values(bookErrorData).every(Boolean)) {
            fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            })
                .then((res) => res.json())
                .then(() => navigate("/")); // Navigate back to the list after adding
        }
    }

    return (
        <div className="container m-5">
            <div className="card">
                <form onSubmit={handleFormSubmit}>
                    <div className="card-header bg-success text-light">
                        <h3>ADD A NEW BOOK</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="bId" className="form-label">Book ID:</label>
                            <input
                                type="text"
                                id="bId"
                                placeholder="Enter Book ID"
                                className="form-control"
                                required
                                name="id"
                                onChange={handleFormChange}
                            />
                            <div className="text-danger small">
                                {bookErrorData.id ? "" : "Book ID is Required!"}
                            </div>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="bTitle" className="form-label">Book Title:</label>
                            <input
                                type="text"
                                id="bTitle"
                                placeholder="Enter Book Title"
                                className="form-control"
                                required
                                name="bookTitle"
                                onChange={handleFormChange}
                            />
                            <div className="text-danger small">
                                {bookErrorData.bookTitle ? "" : "Book Title is Required!"}
                            </div>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="authorId" className="form-label">Author:</label>
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
                                        {author.name} {/* Assuming the author object has "id" and "name" */}
                                    </option>
                                ))}
                            </select>
                            <div className="text-danger small">
                                {bookErrorData.authorId ? "" : "Author is Required!"}
                            </div>
                        </div>
                        <div className="form-control-group m-1">
                            <label htmlFor="bookPrice" className="form-label">Book Price:</label>
                            <input
                                type="number"
                                id="bookPrice"
                                placeholder="Enter Book Price"
                                className="form-control"
                                required
                                name="bookPrice"
                                onChange={handleFormChange}
                            />
                            <div className="text-danger small">
                                {bookErrorData.bookPrice ? "" : "Book Price is Required!"}
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-success text-light">
                        <button type="submit" className="btn btn-light text-success">ADD</button>
                        <button type="reset" className="btn btn-light text-success mx-5">CLEAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
