import axios from "axios";


export default {

    getNewBooks: function(query) {

        const key = process.env.GOOGLE_BOOKS_API;
        const URL = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&=" + key + "";
        
        return axios.get(URL)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    getSavedBooks: function() {
        return axios.get("/api/books")
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
            .then(res => res.data)
            .catch(err => console.log(err))
    },
    saveBooks: function(data) {
        return axios.post("/api/books", data)
            .then(res => res.data)
            .catch(err => console.log(err))
    }

}