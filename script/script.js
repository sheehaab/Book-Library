//the array to store all the book object in it
let myLibrary = [];

//the constructor of the book objects
function Book(bookName,bookPages,bookAuthor){
	this.bookName = bookName;
	this.bookPages = bookPages;
	this.bookAuthor = bookAuthor;
}

//adding the books obj to the myLibrary array
function addBookToLibrary(name,pages,author){
	let newBook = new Book(name,pages,author);
	myLibrary.push(newBook);
}




