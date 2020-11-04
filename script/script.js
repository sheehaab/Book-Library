//the array to store all the book object in it
let myLibrary = [];
let index = 0;

//declare the place I'll append the new books in it
const parentBook = document.getElementById('parent-book');

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
	display(myLibrary);
	myLibrary = [];
}



function display(library){ 	
	myLibrary.forEach((book)=>{ 
		//create the main div that will contain all the info about the book
		const disBook = document.createElement('div');
		//crate the div that will divided the author name and page number and book title
		const authorNameInDom = document.createElement('div');
		const pageNumInDom = document.createElement('div');
		const bookInDom = document.createElement('div');

		authorNameInDom.classList.add('children-style');
		pageNumInDom.classList.add('children-style');
		bookInDom.classList.add('children-style');
		//create the heading of the author and book and page number
		const authorH = document.createElement('span');
		const bookH = document.createElement('span');
		const pageH = document.createElement('span');
		authorH.textContent = 'Author'
		bookH.textContent = 'Book'
		pageH.textContent = 'Pages'
		authorH.classList.add('span-style')
		bookH.classList.add('span-style')
		pageH.classList.add('span-style')


		//create the actual names that the user will put in dom
		const authorTitle = document.createElement('span');
		const pageTitle = document.createElement('span');
		const bookTitle = document.createElement('span');

		//give the span a style
		authorTitle.classList.add('span-style');
		pageTitle.classList.add('span-style');
		bookTitle.classList.add('span-style');
		//put the user input into the spans
		authorTitle.innerHTML = book.bookAuthor;
		pageTitle.textContent = book.bookPages;
		bookTitle.textContent = book.bookName;

		//add style to the new created divs
		disBook.classList.add('book-style');

		//create the cancel button 
		const cancel = document.createElement('button');

		//add the X in it
		cancel.textContent = 'X';

		//add style to it 
		cancel.classList.add('exit')


		//putting the div of the authon and pageNum and book in the container
		disBook.appendChild(authorNameInDom);
		disBook.appendChild(pageNumInDom);
		disBook.appendChild(bookInDom);
		disBook.appendChild(cancel);

		//putting the heading of the three 
		authorNameInDom.appendChild(authorH);
		pageNumInDom.appendChild(pageH);
		bookInDom.appendChild(bookH);

		//put the input of the user
		authorNameInDom.appendChild(authorTitle);
		pageNumInDom.appendChild(pageTitle);
		bookInDom.appendChild(bookTitle);


		//assing this container in the parent div in the actual HTML
		parentBook.appendChild(disBook);

		console.log(book)

	}) 

}



//Declration of the add button and the inner button in the form
const form = document.getElementById('form');
const add_btn = document.getElementById('add-btn');
const exit_btn = document.getElementById('exit-btn');
const addFormButton = document.getElementById('add-button');

//when click the add button show the form 
add_btn.addEventListener('click',function(){
	form.classList.remove('display-none');
	form.classList.add('display-block');
	
})

//when click the exit button hide the form
exit_btn.addEventListener('click',function(){
	form.classList.add('display-none');
	form.classList.remove('display-block');
})



const bookValue = document.getElementById('book-input');
const pagesValue = document.getElementById('pages-input');
const authorValue = document.getElementById('author-input');

//when click on the add button that in the form 
addFormButton.addEventListener('click',function clicking(e){


	//this to fill the first index in the array to could fill the other index in the array
	if(index === 0){
		addBookToLibrary(bookValue.value,pagesValue.value,authorValue.value);
	}else{
		addBookToLibrary(bookValue.value,pagesValue.value,authorValue.value);
	}	
	bookValue.value = '';
	pagesValue.value = '';
	authorValue.value = '';
	form.classList.add('display-none');
	form.classList.remove('display-block');
	index+=1;
})



