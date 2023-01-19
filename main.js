
let conteudo = document.getElementById('conteudo')
let text = document.getElementById('notaTexto')
let cont = document.querySelector('.cont')
let bola = document.querySelectorAll('.bola')



function mudaCor(x){
    for(let i  = 0; i < bola.length; i++){
        bola[i].style.backgroundColor = 'hsl(213, 19%, 18%)'
    }    
    
    x.style.backgroundColor = 'hsl(217, 12%, 63%)'
    x.style.color = '#ffffff'
    notaTexto.innerHTML = 'You selected ' + x.innerHTML + ' out of 5'
    


}

function nota(){
    conteudo.classList.add('hide')
    cont.style.display = 'flex'


}