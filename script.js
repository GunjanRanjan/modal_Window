'use strict';
const modal = document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const removeClass = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addClass = function(){
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
};


for(let i=0; i<btnOpenModal.length; i++){
  btnOpenModal[i].addEventListener('click',removeClass)
};

btnCloseModal.addEventListener('click', addClass);
overlay.addEventListener('click',addClass);