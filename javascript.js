let bookListData = [
    {
        title:'title 1',
        autor:'autor 1',
    },
    {
        title:'title 3',
        autor:'autor 2',
    }
];

// === select the main containter of the book list === //
const elBookList = document.querySelector('.book-list');
let elBookContainer;
let elTitle;
let elAuthor;
let elRemoveBtn;

// === create elements === //
function createElements(){
    elBookContainer = document.createElement('div');
    elBookContainer.classList = 'book-container';
    elTitle = document.createElement('h2');
    elAuthor = document.createElement('h3');
    elRemoveBtn = document.createElement('button');
    elRemoveBtn.textContent = "remove";    
}

// === append elements === //
function appendElements(elm){
    elBookList.appendChild(elBookContainer);
        elTitle.innerText = elm.title;
        elBookContainer.appendChild(elTitle);
        elAuthor.innerText = elm.autor;
        elBookContainer.appendChild(elAuthor);
        elBookContainer.appendChild(elRemoveBtn);
}

// === loop on book list object === //
function createBookList(){
    bookListData.forEach((elm) => {
        createElements();
        appendElements(elm);        
    });
    
}
// bookListData.push({ title: title.value, author: author.value });


/* load page */
window.addEventListener('load', () => {
    createBookList();
  });


