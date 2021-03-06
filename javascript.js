let bookArray = [];
class BookClass {
  constructor(id = (bookArray.length + 1), title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  Add() {
    bookArray.push(this);
  }

  Get() {
    return this;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }
}

function fromJson(b) {
  return new BookClass(b.id, b.title, b.author);
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

// === get the tool bar button === //
const homeBtn = document.getElementById('navbtn-home');
const listBtn = document.getElementById('navbtn-list');
const addBtn = document.getElementById('navbtn-add');
const contactBtn = document.getElementById('navbtn-contact');

// === get the boxes container === //
const boxHome = document.getElementById('home-box');
const boxContact = document.getElementById('contact-box');
const boxList = document.getElementById('list-box');
const boxAdd = document.getElementById('add-box');

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
  elID.hidden = true;
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
    listBtn.click();
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
// === remove all child nodes === //
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
// === toggole change row background color === //
function toggoleRowColor() {
  const bookContainers = document.querySelectorAll('.book-container');
  for (let i = 0; i < bookContainers.length; i += 1) {
    if (i % 2 === 0) bookContainers[i].style.backgroundColor = 'lightgray';
  }
}
function showList() {
  removeAllChildNodes(elBookList);
  createBookList();
  toggoleRowColor();
}

// === the action on button === //
homeBtn.addEventListener('click', () => {
  boxHome.style.display = 'flex';
  boxContact.style.display = 'none';
  boxList.style.display = 'none';
  boxAdd.style.display = 'none';
});
listBtn.addEventListener('click', () => {
  showList();
  boxHome.style.display = 'none';
  boxContact.style.display = 'none';
  boxList.style.display = 'flex';
  boxAdd.style.display = 'none';
});
addBtn.addEventListener('click', () => {
  boxHome.style.display = 'none';
  boxContact.style.display = 'none';
  boxList.style.display = 'none';
  boxAdd.style.display = 'block';
});
contactBtn.addEventListener('click', () => {
  boxHome.style.display = 'none';
  boxContact.style.display = 'flex';
  boxList.style.display = 'none';
  boxAdd.style.display = 'none';
});

// === add book to book list array and localstorage === //
elAddBtn.addEventListener('click', () => {
  const book = new BookClass(undefined, elTitleInput.value, elAutorInput.value);
  book.Add(book);
  localStorage.setItem('bookList', JSON.stringify(bookArray));
  listBtn.click();
});

/* load page */
window.addEventListener('load', () => {
  homeBtn.click();
});
