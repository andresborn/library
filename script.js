// Declare book objects two ways. Dummy tests
let theLordOfTheRings = {
    title : "The Lord of the Rings",
    author : "J.R.R. Tolkien",
    pages : "1000",
    read : false,
};
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', true);

let myLibrary = [theHobbit, theLordOfTheRings];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
};

// DOM methods
const formContainer = document.querySelector('#form-container');

// Open/close form
const openForm = document.querySelector('#open-form');
openForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: flex;');
})
const closeForm = document.querySelector('#close-form');
closeForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: none;');
})

function addBookToLibrary() {

}

const booksContainer = document.querySelector('.books-container');

function loopAndDisplay() {
    //for each object in library
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        const parTitle = document.createElement('p');
        const parAuthor = document.createElement('p');
        const parPages = document.createElement('p');
        const parRead = document.createElement('p');
        const bookButtons = document.createElement('div');
        const readButton = document.createElement('button');
        const removeButton = document.createElement('button');
        
        bookDiv.setAttribute('class', 'book');
        parTitle.setAttribute('class', 'title');
        parAuthor.setAttribute('class', 'author');
        parPages.setAttribute('class', 'pages');
        parRead.setAttribute('class', 'read');
        bookButtons.setAttribute('class', 'book-buttons');
        readButton.setAttribute('id', 'change-read');
        removeButton.setAttribute('id', 'remove-book');

        parTitle.textContent = `${book.title}`;
        parAuthor.textContent = `${book.author}`;
        parPages.textContent = `${book.pages}`;
        parRead.textContent = `${book.read}`;
        readButton.textContent = "Read";
        removeButton.textContent = "Remove";

        bookDiv.appendChild(parTitle);
        bookDiv.appendChild(parAuthor);
        bookDiv.appendChild(parPages);
        bookDiv.appendChild(parRead);

        bookButtons.appendChild(readButton);
        bookButtons.appendChild(removeButton);

        bookDiv.appendChild(bookButtons);

        booksContainer.appendChild(bookDiv);
        return
    });
}

console.log(loopAndDisplay());