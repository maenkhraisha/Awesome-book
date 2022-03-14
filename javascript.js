let bookListData =[];

// === select the main containter of the book list === //
const elBookList = document.querySelector('.book-list');
const elAddBtn = document.getElementById('add-btn');
const elTitleInput = document.getElementById('title-input');
const elAutorInput = document.getElementById('author-input');

// === declaration of variables === //
let elBookContainer;
let elTitle;
let elAuthor;
let elRemoveBtn;
let hirozantalLine;

// === create elements === //
function createElements(){
    elBookContainer = document.createElement('div');
    elBookContainer.classList = 'book-container';
    elTitle = document.createElement('p');
    elAuthor = document.createElement('p');
    elRemoveBtn = document.createElement('button');
    elRemoveBtn.textContent = "remove";    
    hirozantalLine = document.createElement('hr');
    hirozantalLine.className = 'rounded';
}

// === append elements === //
function appendElements(book){
    elBookList.appendChild(elBookContainer);
    elTitle.innerText = book.title;
    elBookContainer.appendChild(elTitle);
    elAuthor.innerText = book.author;
    elBookContainer.appendChild(elAuthor);
    elBookContainer.appendChild(elRemoveBtn);
    elBookContainer.appendChild(hirozantalLine);

    // === remove item from the list book === //
    elRemoveBtn.addEventListener('click',()=>{
        bookListData = bookListData.filter(ele => ele.title != book.title);
        localStorage.setItem('bookList',JSON.stringify(bookListData)); 
        window.location.reload();
    });
}

// === loop on book list object === //
function createBookList(){
    if( localStorage.getItem('bookList') != null){
        bookListData = JSON.parse(localStorage.getItem('bookList'));
        
        bookListData.forEach(book => {
            createElements();
            appendElements(book);       
        });
    }
}

// === add book to book list array and localstorage === //
elAddBtn.addEventListener('click',()=>{
    bookListData.push({ title: elTitleInput.value, author: elAutorInput.value});
    localStorage.setItem('bookList',JSON.stringify(bookListData)); 
});

/* load page */
window.addEventListener('load', () => {
    createBookList();
  });


