const leftPage =document.querySelector('.left')
const rightPage = document.querySelector('.right')


leftPage.addEventListener('mouseenter',() => {
    if(!leftPage.classList.contains('hover-left')){
        leftPage.classList.add('hover-left')
        rightPage.classList.add('hover-left')
    }
})


leftPage.addEventListener('mouseleave',() => {
    if(leftPage.classList.contains('hover-left')){
        leftPage.classList.remove('hover-left')
        rightPage.classList.remove('hover-left')
    }
})



rightPage.addEventListener('mouseenter',() => {
   
    if(!rightPage.classList.contains('hover-right')){
        leftPage.classList.add('hover-right')
        rightPage.classList.add('hover-right')
    }
})


rightPage.addEventListener('mouseleave',() => {
    if(rightPage.classList.contains('hover-right')){
        leftPage.classList.remove('hover-right')
        rightPage.classList.remove('hover-right')
    }
})