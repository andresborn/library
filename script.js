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

function takeUserInput() {

}