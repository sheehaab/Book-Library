//the array to store all the book object in it
let myLibrary = [];
let counter = 0;

//declare the place I'll append the new books in it
const parentBook = document.getElementById('parent-book');
let readit;




//the constructor of the book objects
function Book(bookName,bookPages,bookAuthor,read){
	this.bookName = bookName;
	this.bookPages = bookPages;
	this.bookAuthor = bookAuthor;
	this.read = read;
}

//adding the books obj to the myLibrary array
function addBookToLibrary(name,pages,author,read){
	let newBook = new Book(name,pages,author,read);
	myLibrary.push(newBook);
	display(myLibrary);
	counter += 1;
	checkValidate();

}



function display(library){ 

	for(let i=counter;i<myLibrary.length;i++){
		//create the main div that will contain all the info about the book
		const disBook = document.createElement('div');
		disBook.setAttribute('id','book-obj')
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
		authorTitle.innerHTML = myLibrary[i].bookAuthor;
		pageTitle.textContent = myLibrary[i].bookPages;
		bookTitle.textContent = myLibrary[i].bookName;

		//add style to the new created divs
		disBook.classList.add('book-style');

		//create the checkbox for read it or not 

		const label = document.createElement('label');
		const checkBox = document.createElement('input');
		label.textContent = 'Read';
		label.classList.add('label');
		label.appendChild(checkBox);
		checkBox.setAttribute('type','checkBox');
		checkBox.classList.add('checkbox');
		checkBox.setAttribute('id','javaScriptCheckBox');


		//create the cancel button 
		const cancel = document.createElement('button');

		//put id to the cancel button to make it remove the books from library
		cancel.setAttribute('id','cancelBtn');

		//add the X in it
		cancel.innerHTML = '&times;';

		//add style to it 
		cancel.classList.add('exit')

		cancel.addEventListener('mouseout',function(){
			cancel.classList.add('exit');
			cancel.classList.remove('exit-hover');
		})
		cancel.addEventListener('mouseover',function(){
			cancel.classList.add('exit-hover');
		})


		//putting the div of the authon and pageNum and book in the container
		disBook.appendChild(authorNameInDom);
		disBook.appendChild(pageNumInDom);
		disBook.appendChild(bookInDom);
		disBook.appendChild(label);
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
		console.log(counter);


	}
	cancelButton();



}


//this to remove the object from the array
function cancelButton(){
	const allCancel = document.querySelectorAll('#cancelBtn');
	allCancel.forEach((cancel)=>{
		cancel.addEventListener('click',function(e){
			e.target.parentElement.remove();
			let bookName = e.target.parentNode.childNodes[2].lastChild.textContent;
			let counter = 0;
			for(let i=0;i<myLibrary.length;i++){
				if(myLibrary[i].bookName === bookName){
					myLibrary.splice(i,1);
					break;
				}
			}

		})
	})

	
}


//Declration of the add button and the inner button in the form
const form = document.getElementById('form');
const addNewBookbtn = document.getElementById('add-btn');
const exit_btn = document.getElementById('exit-btn');
const addFormButton = document.getElementById('add-button');

//when click the add button show the form 
addNewBookbtn.addEventListener('click',function(){
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
const errorMsg = document.getElementById('msg');
function checkValidate(){
	const checkboxjs = document.querySelectorAll('#javaScriptCheckBox');

		checkboxjs.forEach((check)=>{
		check.addEventListener('click',function(e){
				
				if(check.checked === false){
						let bookName = e.target.parentNode.parentNode.childNodes[2].lastChild.textContent;
						for(let i=0;i<myLibrary.length;i++){
							if(myLibrary[i].bookName === bookName){
								myLibrary.read = check.checked;
								readit = check.checked = false;
								check.classList.remove('checked');
								console.log(check.checked);
								break;
							}
					}
				}else if(check.checked === true){
						let bookName = e.target.parentNode.parentNode.childNodes[2].lastChild.textContent;
						for(let i=0;i<myLibrary.length;i++){
							if(myLibrary[i].bookName === bookName){
								myLibrary.read = check.checked;
								readit = check.checked = true;
								check.classList.add('checked');
								console.log(check.checked);
								break;
							}
						}
				}
		})
})
}



//when click on the add button that in the form 
addFormButton.addEventListener('click',function clicking(){

	let bookVal = bookValue.value;
	let pagesVal = pagesValue.value;
	let authorVal = authorValue.value;

	if(bookVal === ''){//check wether the fields is empty or not
		errorMsg.textContent = '*Book title is Required';
		return;
	}else if(pagesVal === ''){
		errorMsg.textContent = '*Pages number is Required';
		return;
	}else if(authorVal === ''){
		errorMsg.textContent = '*Author name is Required';
		return;
	}else if(isNaN(pagesVal)){ // check wether page is number or not
		errorMsg.textContent = '*Pages must be a number';
		return;
	}else{
		errorMsg.textContent = '';
		addBookToLibrary(bookVal,pagesVal,authorVal,readit);
		bookValue.value = '';
		pagesValue.value = '';
		authorValue.value = '';
		form.classList.add('display-none');
		form.classList.remove('display-block');
	}
})





