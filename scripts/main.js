let scrollY = window

window.addEventListener('scroll', () => {
    
    let element = document.querySelectorAll('.fadeIn');

    element.forEach(element => {
    if ((window.scrollY + window.innerHeight) > (element.offsetTop + (element.offsetHeight / 2))) {
        element.classList.add('visible');
    }

    console.log(`scrollY : ${window.scrollY}`);
    console.log(`innerHeight : ${window.innerHeight}`);
    //console.log(`scrollY : ${windows.scrollY}`);
    //console.log(`innerHeight : ${windows.innerHeight}`);
});

});

console.log(`scrollY : ${window.scrollY}`);
console.log(`innerHeight : ${window.innerHeight}`);