import axios from "axios";

// The getBooks method retrieves books from the server
// It accepts a "query" or term to search the book api for
import axios from "axios";

export default {
    getBooks: query => {
        console.log(query);
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        return axios.post("/search", {title: title});
    },
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    }
}

