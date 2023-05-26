// 中部
const scrollRevealOpt1 = {
    delay: 400,
    distance: '100px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom'
}


const scrollRevealOpt2 = {
    delay: 400,
    distance: '100px',
    duration: 500,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom'
}

// 左侧图标区域 动画效果配置
const leftIconsOpt = {
    delay: 400,
    distance: '45px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left'
}

const leftcontent = document.querySelector('.content .left')
const rightcontent = document.querySelector('.content .right')
const mobileBar = document.getElementById('mobile-bar')

const leftIcons = document.querySelector('.left-icons')




ScrollReveal(scrollRevealOpt1).reveal(leftcontent);
ScrollReveal(scrollRevealOpt2).reveal(rightcontent);
ScrollReveal(leftIconsOpt).reveal(leftIcons)
const menuList = document.querySelector('.menu-bar')
mobileBar.onclick = () => {
    menuList.classList.toggle('open')
    mobileBar.classList.toggle('bx-x')
}