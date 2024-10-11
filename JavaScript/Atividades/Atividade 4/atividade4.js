const mudaTitulo= (novoTitulo) =>{
    const titulo= document.getElementById('titulo-principal')
    titulo.innerText = novoTitulo
}
setTimeout(() =>mudaTitulo('AEEEEEE acabei!!!'), 2000)

const listaDeLi=document.getElementsByTagName('li')
const listaDeCores= ['#d60000', '#05f7ab']

const listaDeParagrafos=document.getElementsByTagName('p')

for(let paragrafo of listaDeParagrafos){
    paragrafo.classList='paragrafo'
}
const botao=document.getElementsByTagName('button')[0]

setTimeout(()=>botao.innerText='mentira, é um botão sim',3000)

for(let li in listaDeLi){
    listaDeLi[li].style.color=listaDeCores[li]
}

