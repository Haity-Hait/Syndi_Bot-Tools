window.addEventListener('scroll', () => {
    let content = document.querySelector('.add');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight ;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.add2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight ;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.add3');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight ;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})