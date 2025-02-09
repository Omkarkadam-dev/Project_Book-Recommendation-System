function recommendBooks() {
    let genre = document.getElementById("genreInput").value;
    let recommendations = document.getElementById("recommendations");

    if (genre.trim() === "") {
        recommendations.innerHTML = "<p>Please enter a genre.</p>";
        return;
    }

    let books = {
        "fiction": { title: "The Great Gatsby", author: "F. Scott Fitzgerald", img: "gatsby.jpg" },
        "mystery": { title: "Sherlock Holmes", author: "Arthur Conan Doyle", img: "sherlock.jpg" },
        "fantasy": { title: "Harry Potter", author: "J.K. Rowling", img: "harrypotter.jpg" }
    };

    let book = books[genre.toLowerCase()];

    if (book) {
        recommendations.innerHTML = `
            <div class="book-display">
                <img src="${book.img}" alt="Book Cover" class="book-img">
                <p class="book-title">${book.title}</p>
                <p class="book-author"><i class="fas fa-user"></i> ${book.author}</p>
            </div>
        `;
    } else {
        recommendations.innerHTML = "<p>No recommendations found for this genre.</p>";
    }
}
