const leftSide =  document.querySelector('.left-side')
const rightSide =  document.querySelector('.right-side')
const downBtn = document.querySelector('.down-button')

const upBtn = document.querySelector('.up-button')

let index = 0

downBtn.addEventListener('click', () =>{
    console.log('index is ',index)
    index +=1
    if(index >=3){
        index =3
    }
    updateTransform()
})

upBtn.addEventListener('click', () =>{
    console.log('index is ',index)
    index -=1
    if(index <0){
        index =0
    }
    updateTransform()
})


function updateTransform(){
    const precen = (index*100)/4
    leftSide.style.transform = 'translateY(' + '-' + precen + '%)'

    let rightPre =  (3-index)*100
    rightSide.style.transform = 'translateY(' + '-' + rightPre + '%)'

    
}