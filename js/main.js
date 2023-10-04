const text = document.querySelector('.text-mask')
const para = document.querySelector('.text-mask-para')
window.addEventListener('scroll', function(){
    const value = window.scrollY;
    // console.log(value);
    text.style.marginTop = value*-0.1 + "px";
    para.style.marginTop = value*-0.1 + "px";
})