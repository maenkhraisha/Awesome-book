/* eslint-disable */
let bookArray = [];
class BookClass {
  constructor(id=(bookArray.length+1),title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  Add(){
    bookArray.push(this);
  }
  Get(){
    return this;
  }

  getId(){
    return this.id;
  }
  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  Remove(id) {
    bookArray = bookArray.filter((ele) => ele.id !== this.id);
  }
}

function fromJson(b){
  return new BookClass(b.id,b.title,b.author);    
}

// === select the main containter of the book list === //
const elBookList = document.querySelector('.book-list');
const elAddBtn = document.getElementById('add-btn');
const elTitleInput = document.getElementById('title-input');
const elAutorInput = document.getElementById('author-input');

// === declaration of variables === //
let elBookContainer;
let elID;
let elTitle;
let elAuthor;
let elRemoveBtn;

// === create elements === //
function createElements() {
  elBookContainer = document.createElement('div');
  elBookContainer.classList = 'book-container';
  elID = document.createElement('p');
  elTitle = document.createElement('p');
  elAuthor = document.createElement('p');
  elRemoveBtn = document.createElement('button');
  elRemoveBtn.textContent = 'Remove';
}

// === append elements === //
function appendElements(book) {
  elBookList.appendChild(elBookContainer);
  
  elID.innerText = book.getId();
  elBookContainer.appendChild(elID);
  
  elTitle.innerText = `${book.getTitle()} by `;
  elBookContainer.appendChild(elTitle);

  elAuthor.innerText = book.getAuthor();
  elBookContainer.appendChild(elAuthor);
  
  elBookContainer.appendChild(elRemoveBtn);

// === button to remove item from the list book === //
elRemoveBtn.addEventListener('click', () => {
  bookArray = bookArray.filter((ele) => ele.id !== book.getId());
  localStorage.setItem('bookList', JSON.stringify(bookArray));
  window.location.reload();
});
}

// === loop on book list object === //
function createBookList() {
  if (localStorage.getItem('bookList') != null) {
    bookArray = JSON.parse(localStorage.getItem('bookList'));

    bookArray.forEach((b) => {
      b = fromJson(b);
      createElements();
      appendElements(b);
    });
  }
}

// === add book to book list array and localstorage === //
elAddBtn.addEventListener('click', () => {
  const book = new BookClass(undefined ,elTitleInput.value, elAutorInput.value);
  book.Add(book);
  localStorage.setItem('bookList', JSON.stringify(bookArray));
});

// test code
function addObj(){
  let book = new BookClass('title test','author test');
  book.Add();
  localStorage.setItem('bookList', JSON.stringify(bookArray));
}
function restoreObj(){
  bookArray = JSON.parse(localStorage.getItem('bookList'));
  bookArray.forEach((b) => {
    b = fromJson(b);
    console.log(b.constructor.name);
 }); 
}

/* load page */
window.addEventListener('load', () => {
  createBookList();
});
