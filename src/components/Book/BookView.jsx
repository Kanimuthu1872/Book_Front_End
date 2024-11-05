import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
export default function BookView() {
    const baseUrl = `http://localhost:8081/books`; // Base URL for the books API
    const { id } = useParams(); // Extracting the book ID from URL parameters
    const navigate = useNavigate(); // Hook for navigation
    const [fetchedBook, setFetchedBook] = useState({
        id: "",
        bookTitle: "",
        authorId: "",
        bookPrice: 0
    });
 
    useEffect(() => {
        fetch(`${baseUrl}/${id}`) // Fetching the book data
            .then((res) => res.json())
            .then((data) => setFetchedBook(data));
    }, [id]); // Fetch book data when the component mounts or the ID changes
 
    return (
        <div className="container mx-5 px-5">
            <button onClick={() => navigate(-1)} className="btn btn-primary">Back to Book List</button>
            {fetchedBook.bookTitle ? ( // Check if book title is available
                <div className="card m-2">
                    <div className="card-header bg-warning text-light">
                        <h3>Book Details for Book ID: {id}</h3>
                    </div>
                    <div className="card-body">
                        <h6>Book ID: {fetchedBook.id}</h6>
                        <h6>Book Title: {fetchedBook.bookTitle}</h6>
                        <h6>Author ID: {fetchedBook.authorId}</h6>
                        <h6>Book Price: ${fetchedBook.bookPrice}</h6>
                    </div>
                </div>
            ) : (
                <div className="text-danger">Book not found!</div> // Fallback for when book data isn't available
            )}
        </div>
    );
}
 