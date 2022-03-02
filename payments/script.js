const collapsebutton = document.getElementById('collapsedetails');
const cuotacol = document.getElementById('cuotacol');
const bottomsee = document.getElementById('bottomsee');
const bottominp = bottomsee.querySelector('input');

collapsebutton.addEventListener('click', function() {
    const collapse = document.querySelector('.card.topone');
    const collapsedetails = document.querySelector('#detailcol');
    collapsedetails.classList.toggle('hidden');
    collapse.classList.toggle('show');
});

bottomsee.addEventListener('click', function() {
    bottominp.checked = bottominp.checked ? false : true;
    cuotacol.classList.toggle('hidden');
});