function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

console.log(theHobbit.info());

const testing = document.createElement('p');
testing.textContent = 'TESTING';
const main = document.querySelector('main');
main.appendChild(testing);