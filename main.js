// bai 2

let tinhTong = (x,n) => {
    let sum = 0;
    for(let i=1 ;i<=n;i++){
        sum += Math.pow(x,i);
    }
    return sum;
}

document.getElementById('bai2').addEventListener('click',() =>{
    let n = +document.getElementById('valueN').value
    let x = +document.getElementById('valueX').value
    console.log(n,x)
    let sum = tinhTong(x,n)
    document.getElementById('result2').innerText = `Kết quả là: ${sum}`

})


//bai 3


let giaiThua = (n) => {
    let sum = 1;
    for(let i=1; i<=n;i++){
        sum *= i
    }
    return sum
} 
 

document.getElementById("bai3").addEventListener('click',() => {
    let n = +document.getElementById('valueN2').value
    sum = giaiThua(n);

    document.getElementById('result3').innerText = `Kết quả là: ${sum}`
})


//bai 4

document.getElementById('bai4').addEventListener('click',function(){
    let result4 = document.getElementById('reuslt4')
    let card = document.querySelectorAll('.car');
    card.forEach((ele,index) => {
        if((index +1 ) % 2 ==0){
            ele.classList.add('even')
        }
        else{
            ele.classList.add("odd")
        }
    })
    if(result4.classList.contains('dis')){
        result4.classList.remove('dis')
        result4.classList.add('show')
    }
    else{
        result4.classList.add('dis')
        result4.classList.remove('show')
    }
})

//bai 5
let inCrease = (n) => {
    let arr = []
    for(let i=1 ;i<= n;i++){
        arr.push(i);
    }
    return arr
    
}
document.getElementById('bai5').addEventListener("click",() => {
    let value = +document.getElementById('value5').value
    let arr = inCrease(value)
    document.getElementById('result5').innerText = `Dãy số của bạn là: ${arr.join(" ")}`
    
})