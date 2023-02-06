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
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.add4');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.add5');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active')
    }else{
        content.classList.remove('active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.trans');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('trans_active')
    }else{
        content.classList.remove('trans_active')
    }
})
window.addEventListener('scroll', () => {
    let content = document.querySelector('.trans1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('trans_active')
    }else{
        content.classList.remove('trans_active')
    }
})