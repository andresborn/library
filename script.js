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

const formContainer = document.querySelector('#form-container');

const form = document.querySelector('.form');
const booksContainer = document.querySelector('.books-container');

function addBookToLibrary(e) {
    e.preventDefault(); //submiting form won't refresh the page
    const title = (this.querySelector('[id=input-title]')).value;
    const author = (this.querySelector('[id=input-author]')).value;
    const pages = (this.querySelector('[id=input-pages]')).value;

    const book = {
        title,
        author,
        pages,
        read: false,
    }

    myLibrary.push(book);
    this.reset();
    loopAndDisplay(myLibrary, booksContainer)
}

function loopAndDisplay(books = [], bookList) {
    bookList.innerHTML = books.map((book, i) => {
        return `
        <div class="book">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <input type="checkbox" data-index="${i}" id="item${i}">
        <label for="item${i}">Read ${book.read}</label>
            <div class="book-buttons">
                <button id="remove-book">Remove</button>
            </div>
        </div>    
        `
    }).join('');
}

// Open/close form
const openForm = document.querySelector('#open-form');
openForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: flex;');
    
    const inputDiv = document.querySelector('#input-checkbox');
    inputDiv.innerHTML = 
    `<input type="checkbox" id="input-read-yes" name="input-read-yes" value="yes">
    <label for="input-read-yes">Read?</label>`;
})
const closeForm = document.querySelector('#close-form');
closeForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: none;');
})

form.addEventListener('submit', addBookToLibrary);

console.log(loopAndDisplay(myLibrary, booksContainer));