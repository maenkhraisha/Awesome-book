// === get the tool bar button === //
const homeBtn = document.getElementById('home');
const listBtn = document.getElementById('list');
const addBtn = document.getElementById('add');
const contactBtn = document.getElementById('contact');
//= ================================//
// === get the boxes container === //
const boxHome = document.getElementById('home-box');
const boxContact = document.getElementById('contact-box');
const boxList = document.getElementById('list-box');
const boxAdd = document.getElementById('add-box');
//= ================================//

function navigate(key) {
  switch (key) {
    case 'home':
      boxHome.classList.remove('hide');
      boxContact.classList.add('hide');
      boxList.classList.add('hide');
      boxAdd.classList.add('hide');
      break;
    case 'list':
      boxHome.classList.add('hide');
      boxContact.classList.add('hide');
      boxList.classList.remove('hide');
      boxAdd.classList.add('hide');
      break;
    case 'add':
      boxHome.classList.add('hide');
      boxContact.classList.add('hide');
      boxList.classList.add('hide');
      boxAdd.classList.remove('hide');
      break;
    case 'contact':
      boxHome.classList.add('hide');
      boxContact.classList.remove('hide');
      boxList.classList.add('hide');
      boxAdd.classList.add('hide');
      break;
    default:
      break;
  }
}
// === the action on button === //
homeBtn.addEventListener('click', () => {
  navigate('home');
});
listBtn.addEventListener('click', () => {
  navigate('list');
});
addBtn.addEventListener('click', () => {
  navigate('add');
});
contactBtn.addEventListener('click', () => {
  navigate('contact');
});
// ============================= //

window.addEventListener('load', () => {
  // boxHome.classList.remove('hide');
  // boxContact.classList.add('hide');
  // boxList.classList.add('hide');
  // boxAdd.classList.add('hide');
});