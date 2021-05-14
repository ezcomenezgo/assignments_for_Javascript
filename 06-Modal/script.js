'use strict';

// step 1: select the elements we need
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// run each modal
// why we can't call the function in addEventListener function?
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  console.log(btnsOpenModal[i]);
}

// click close btn
btnCloseModal.addEventListener('click', closeModal);
// click overlay
overlay.addEventListener('click', closeModal);
// press esc
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // remember call the function
    closeModal();
  }
});
