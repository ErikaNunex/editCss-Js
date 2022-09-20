function abcd() {
 let idade = document.getElementById('input1').value
 console.log(idade)
 if(idade>=18){
    document.getElementById('texto1').textContent = 'Maior de idade'
    document.getElementById('input1').style.backgroundColor = '#7FF57B'
 }else{
    document.getElementById('texto1').textContent = 'Menor de idade'
    document.getElementById('input1').style.backgroundColor = '#FF705B'
    

 }
}