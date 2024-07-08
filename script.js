const header=document.querySelector('header');
const hamburgerBtn=document.querySelector('#hamburger-btn');
const closeMenubtn=document.querySelector('#close-menu-btn')

hamburgerBtn.addEventListener('click',()=>{
    header.classList.toggle("show-mobile-menu")
});
closeMenubtn.addEventListener('click',()=>{
    hamburgerBtn.click();
})