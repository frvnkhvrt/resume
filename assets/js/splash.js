/*==================== SPLASH SCREEN ====================*/
let intro = document.querySelector('.intro');
let logoHeader = document.querySelector('.logo__header');
let logoSpan = document.querySelectorAll('.logoSplash');

window.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {

        logoSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        
        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })    
        },2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        },2300);
    })
})