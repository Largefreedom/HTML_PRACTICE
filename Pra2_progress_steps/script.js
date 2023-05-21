const preBtn = document.querySelector('.pre-btn');
const nextBtn = document.querySelector('.next-btn');
const allCircles = document.querySelectorAll('.circle')
const progressBar = document.querySelector('.progress-bar')

const circleLength = allCircles.length;



// 初始索引
let index = 0;
preBtn.addEventListener('click', () => {
    console.log('next click is ')
    index -=1;
    updateProgressBar()
})


nextBtn.addEventListener('click', () => {
    console.log('next click is ')
    index +=1;
    updateProgressBar()
})






function updateProgressBar(){
    if(index <= 0){
        index = 0;
        // pre button 判断
        if(preBtn.classList.contains('active')){
            preBtn.classList.remove('active');
        }
    }else{
        if(!preBtn.classList.contains('active')){
            preBtn.classList.add('active');
        }
    }
    
    if(index +1 >= circleLength){
        index = circleLength-1;
        // next button 判断
        if(nextBtn.classList.contains('active')){
            nextBtn.classList.remove('active');
        }
    }else{
        if(!nextBtn.classList.contains('active')){
            nextBtn.classList.add('active');
        }
    }
    allCircles.forEach((circle, circleIndex) => {
        if(circleIndex <= index && !circle.classList.contains('active')){
            circle.classList.add('active');
        }else if(circleIndex>index && circle.classList.contains('active')){
            circle.classList.remove('active');
        }
    })

    let width =  index*100 /(circleLength-1)
    console.log('index is ',index,circleLength)
    if(width >100){
        width =100
    }else if(width <0){
        width = 0
    }
    progressBar.style.width = width + '%';
    console.log('progress bar width: ' + width)
}