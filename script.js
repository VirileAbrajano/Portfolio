
function showCategory(categoryId){
const categories = document.querySelectorAll('.project-category');

categories.forEach(category => {
category.classList.remove('active');
});

document.getElementById(categoryId).classList.add('active');
}

window.addEventListener('scroll', reveal);

function reveal(){
const reveals = document.querySelectorAll('.reveal');

for(let i=0;i<reveals.length;i++){
const windowHeight = window.innerHeight;
const revealTop = reveals[i].getBoundingClientRect().top;
const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){
reveals[i].classList.add('active');
}
}
}

reveal();
