//let myLibrary = [theHobbit];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
};


let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'true');

const formContainer = document.querySelector('#form-container');
const openForm = document.querySelector('#open-form');
openForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: flex;');
})
const closeForm = document.querySelector('#close-form');
closeForm.addEventListener('click', () => {
    formContainer.setAttribute('style', 'display: none;');
})