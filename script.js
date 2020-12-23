let myLibrary = JSON.parse(localStorage.getItem('books')) || [];

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
    const read = (this.querySelector('[id=input-read-yes]')).checked;

    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    this.reset();
    localStorage.setItem('books', JSON.stringify(myLibrary));
    loopAndDisplay(myLibrary, booksContainer)
}

function loopAndDisplay(books = [], bookList) {
    bookList.innerHTML = books.map((book, i) => {
        return `
        <div class="book">
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="pages">${book.pages}</p>
        <input type="checkbox" data-index="${i}" id="item${i}" ${book.read ? 'checked' : ''}>
        <label for="item${i}">Read ${book.read ? 'Yes' : 'No'}</label>
            <div class="book-buttons">
                <button id="remove-book" data-index="${i}">Remove</button>
            </div>
        </div>    
        `
    }).join('');
}

function toggleRead(e) {
    if (!e.target.matches('input')) return; //skip everything except input
    const item = e.target; // select checkbox
    const index = item.dataset.index; // set checkbox index 
    myLibrary[index].read = !myLibrary[index].read; // change read property to opposite
    localStorage.setItem('books', JSON.stringify(myLibrary));
    loopAndDisplay(myLibrary, booksContainer);
}

function removeButton(e) {
    if (!e.target.matches('button')) return; //skip except if button
    const button = e.target;
    const index = button.dataset.index;
    myLibrary.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(myLibrary));
    loopAndDisplay(myLibrary, booksContainer);
}

function testing(e) {
    if (!e.target.matches('#input-read-yes')) return;
    const checkbox = e.target;
    console.log(checkbox);
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
formContainer.addEventListener('click', testing);
booksContainer.addEventListener('click', toggleRead);
booksContainer.addEventListener('click', removeButton);
loopAndDisplay(myLibrary, booksContainer);