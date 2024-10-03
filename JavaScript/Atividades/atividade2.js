const estoque=[
    {id: 1, titulo:"Senhor dos aneis",autor:J. R. R. Tolkien, quantidade:8},
    {id: 2, titulo:"Hobbit", autor:J. R. R. Tolkien, quantidade:10},
    {id: 3, titulo:"O Silmarillion", autor:J. R. R. Tolkien, quantidade:20},
    {id: 4, titulo:"A História da Terra-média", autor:J. R. R. Tolkien, quantidade:21},
]

const adicionaLivro=(id, titulo, autor, quantidade)=>{
    estoque.punsh({
        id,
        titulo,
        autor,
        quantidade,
    })
}

adicionaLivro(5, "harry potter", "J. K. Rowling", 4)
console.log(estoque)


const removeLivro =(idDoLivro)=>{
    const existeId = !!estoque.find(livro=> livro.id === idDoLivro)
    if(existeId){
        for (let indice = 0; indice < estoque. length; indice++) {
            if(estoque(indice).id===idDoLivro)
                console.log('livro removido')
                estoque.splice(indice, 1)
            break;
        }
    }
    else
    console.log('Livro não encontrado')
}

removeLivro(3)
conseole.log(estoque)

const atualizaQuantidade=(idDoLivro, novaquantidade) => {
    if(existeId){
        
        for(let livro of estoque) {
            if(livro.id === idDoLivro){
                livro.quantidade=novaQuantidade;
                console.log('A quantidade do livro atualizado')
                break;
            }
        }
    }else{
        console.log("Id não encontrado")
    }
}
atualizaQuantidade(4, 31);

const listarLivros=()=>{
    for (let livro of estoque){
        console.log(`ID: ${livro.id} 
            Livro: ${livro.titulo}
            Autor: ${livro.autor}
            Quantidade> ${livro.quantidade}`)
    }
}