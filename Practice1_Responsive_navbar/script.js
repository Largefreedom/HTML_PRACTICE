const btn = document.querySelector('.btn')
const menuBar = document.querySelector('.menu-bar')

btn.addEventListener('click', () =>{
    const visible = menuBar.getAttribute("aria-expanded")
    console.log('visible is ',visible)
    if(visible === "true"){
        menuBar.setAttribute("aria-expanded",false)
        btn.setAttribute("aria-expanded",false)
    }else{
        menuBar.setAttribute("aria-expanded",true)
        btn.setAttribute("aria-expanded",true)
    }
})