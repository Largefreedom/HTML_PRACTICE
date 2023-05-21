const textEl =document.getElementById('text')
const speedNum = document.getElementById('speed')

const text = "小张Python，数据测试，测试-1112";
let idx = 1;
let speed = 500/speedNum.value

writeText()
function writeText(){
    // 末尾元素
    textEl.innerText = text.slice(0,idx);
    idx ++;
    if(idx >text.length){
        // 重置
        idx = 1
    }
    console.log('spped is ',speed)
    // 递归 30-300 ms 延迟
    setTimeout(writeText,speed)
}


speedNum.addEventListener('input',(e) =>{
    speed = 300/e.target.value
    console.log('e is ',e)
} )