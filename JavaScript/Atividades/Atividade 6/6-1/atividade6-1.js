const Limpar = document.getElementById('lixeira-tudo');
Limpar.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})

function carregar(){
    updateContador1()
    updateContador2()
    updateContador3()
    updateContador4()
    updateContador5()
    updateContador6()
    updateContador7()
    updateContador8()
    updateContador9()
    updateContador10()
}

const Botao1 = document.getElementById('Botao1');
const Contador1Display = document.getElementById('Contador1');

let likes = JSON.parse(localStorage.getItem('likes1')) || [];

Botao1.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes.includes(name)) { 
        likes.push(name);
        localStorage.setItem('likes1', JSON.stringify(likes)); 
    }
    
    updateContador1();
});

function updateContador1() {
    const count = likes.length;

    if (count === 0) {
        Contador1Display.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador1Display.textContent = `${likes[0]} curtiu`;
    } else if (count === 2) {
        Contador1Display.textContent = `${likes[0]} e ${likes[1]} curtiram`;
    } else {
        Contador1Display.textContent = `${likes[0]}, ${likes[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira1 = document.getElementById('lixeira1');
lixeira1.addEventListener('click', () => {
    likes = [];
    localStorage.removeItem('likes1');
    updateContador1();
});


const Botao2 = document.getElementById('Botao2');
const Contador2Display = document.getElementById('Contador2');

let likes2 = JSON.parse(localStorage.getItem('likes2')) || [];

Botao2.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes2.includes(name)) { 
        likes2.push(name);
        localStorage.setItem('likes2', JSON.stringify(likes2)); 
    }
    
    updateContador2();
});

function updateContador2() {
    const count = likes2.length;

    if (count === 0) {
        Contador2.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador2.textContent = `${likes2[0]} curtiu`;
    } else if (count === 2) {
        Contador2.textContent = `${likes2[0]} e ${likes2[1]} curtiram`;
    } else {
        Contador2.textContent = `${likes2[0]}, ${likes2[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira2 = document.getElementById('lixeira2');
lixeira2.addEventListener('click', () => {
    likes2 = [];
    localStorage.removeItem('likes2');
    updateContador2();
});

const Botao3 = document.getElementById('Botao3');
const Contador3Display = document.getElementById('Contador3');

let likes3 = JSON.parse(localStorage.getItem('likes3')) || [];

Botao3.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes3.includes(name)) { 
        likes3.push(name);
        localStorage.setItem('likes3', JSON.stringify(likes3)); 
    }
    
    updateContador3();
});

function updateContador3() {
    const count = likes3.length;

    if (count === 0) {
        Contador3.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador3.textContent = `${likes3[0]} curtiu`;
    } else if (count === 2) {
        Contador3.textContent = `${likes3[0]} e ${likes3[1]} curtiram`;
    } else {
        Contador3.textContent = `${likes3[0]}, ${likes3[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira3 = document.getElementById('lixeira3');
lixeira3.addEventListener('click', () => {
    likes3 = [];
    localStorage.removeItem('likes3');
    updateContador3();
});

const Botao4 = document.getElementById('Botao4');
const Contador4Display = document.getElementById('Contador4');

let likes4 = JSON.parse(localStorage.getItem('likes4')) || [];

Botao4.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes4.includes(name)) { 
        likes4.push(name);
        localStorage.setItem('likes4', JSON.stringify(likes4)); 
    }
    
    updateContador4();
});

function updateContador4() {
    const count = likes4.length;

    if (count === 0) {
        Contador4.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador4.textContent = `${likes4[0]} curtiu`;
    } else if (count === 2) {
        Contador4.textContent = `${likes4[0]} e ${likes4[1]} curtiram`;
    } else {
        Contador4.textContent = `${likes4[0]}, ${likes4[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira4 = document.getElementById('lixeira4');
lixeira4.addEventListener('click', () => {
    likes2 = [];
    localStorage.removeItem('likes4');
    updateContador4();
});

const Botao5 = document.getElementById('Botao5');
const Contador5Display = document.getElementById('Contador5');

let likes5 = JSON.parse(localStorage.getItem('likes5')) || [];

Botao5.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes.includes(name)) { 
        likes5.push(name);
        localStorage.setItem('likes5', JSON.stringify(likes5)); 
    }
    
    updateContador5();
});

function updateContador5() {
    const count = likes5.length;

    if (count === 0) {
        Contador5.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador5.textContent = `${likes5[0]} curtiu`;
    } else if (count === 2) {
        Contador5.textContent = `${likes5[0]} e ${likes5[1]} curtiram`;
    } else {
        Contador5.textContent = `${likes5[0]}, ${likes5[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira5 = document.getElementById('lixeira5');
lixeira5.addEventListener('click', () => {
    likes5 = [];
    localStorage.removeItem('likes5');
    updateContador5();
});

const Botao6 = document.getElementById('Botao6');
const Contador6Display = document.getElementById('Contador6');

let likes6 = JSON.parse(localStorage.getItem('likes6')) || [];

Botao6.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes6.includes(name)) { 
        likes6.push(name);
        localStorage.setItem('likes6', JSON.stringify(likes6)); 
    }
    
    updateContador6();
});

function updateContador6() {
    const count = likes6.length;

    if (count === 0) {
        Contador6.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador6.textContent = `${likes6[0]} curtiu`;
    } else if (count === 2) {
        Contador6.textContent = `${likes6[0]} e ${likes6[1]} curtiram`;
    } else {
        Contador6.textContent = `${likes6[0]}, ${likes6[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira6 = document.getElementById('lixeira6');
lixeira6.addEventListener('click', () => {
    likes6 = [];
    localStorage.removeItem('likes6');
    updateContador6();
});

const Botao7 = document.getElementById('Botao7');
const Contador7Display = document.getElementById('Contador7');

let likes7 = JSON.parse(localStorage.getItem('likes7')) || [];

Botao7.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes7.includes(name)) { 
        likes7.push(name);
        localStorage.setItem('likes7', JSON.stringify(likes7)); 
    }
    
    updateContador7();
});

function updateContador7() {
    const count = likes7.length;

    if (count === 0) {
        Contador7.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador7.textContent = `${likes7[0]} curtiu`;
    } else if (count === 2) {
        Contador7.textContent = `${likes7[0]} e ${likes7[1]} curtiram`;
    } else {
        Contador7.textContent = `${likes7[0]}, ${likes7[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira7 = document.getElementById('lixeira7');
lixeira7.addEventListener('click', () => {
    likes7 = [];
    localStorage.removeItem('likes7');
    updateContador7();
});

const Botao8 = document.getElementById('Botao8');
const Contador8Display = document.getElementById('Contador8');

let likes8 = JSON.parse(localStorage.getItem('likes8')) || [];

Botao8.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes8.includes(name)) { 
        likes8.push(name);
        localStorage.setItem('likes8', JSON.stringify(likes8)); 
    }
    
    updateContador8();
});

function updateContador8() {
    const count = likes8.length;

    if (count === 0) {
        Contador8.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador8.textContent = `${likes8[0]} curtiu`;
    } else if (count === 2) {
        Contador8.textContent = `${likes8[0]} e ${likes8[1]} curtiram`;
    } else {
        Contador8.textContent = `${likes8[0]}, ${likes8[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira8 = document.getElementById('lixeira8');
lixeira8.addEventListener('click', () => {
    likes8 = [];
    localStorage.removeItem('likes8');
    updateContador8();
});

const Botao9 = document.getElementById('Botao9');
const Contador9Display = document.getElementById('Contador9');

let likes9 = JSON.parse(localStorage.getItem('likes9')) || [];

Botao9.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes9.includes(name)) { 
        likes9.push(name);
        localStorage.setItem('likes9', JSON.stringify(likes9)); 
    }
    
    updateContador9();
});

function updateContador9() {
    const count = likes9.length;

    if (count === 0) {
        Contador9.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador9.textContent = `${likes9[0]} curtiu`;
    } else if (count === 2) {
        Contador9.textContent = `${likes9[0]} e ${likes9[1]} curtiram`;
    } else {
        Contador9.textContent = `${likes9[0]}, ${likes9[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira9 = document.getElementById('lixeira9');
lixeira9.addEventListener('click', () => {
    likes9 = [];
    localStorage.removeItem('likes9');
    updateContador9();
});

const Botao10 = document.getElementById('Botao10');
const Contador10Display = document.getElementById('Contador10');

let likes10 = JSON.parse(localStorage.getItem('likes10')) || [];

Botao10.addEventListener('click', () => {
    const name = prompt("Digite seu nome:"); 

    if (name && !likes10.includes(name)) { 
        likes10.push(name);
        localStorage.setItem('likes10', JSON.stringify(likes10)); 
    }
    
    updateContador10();
});

function updateContador10() {
    const count = likes10.length;

    if (count === 0) {
        Contador10.textContent = "Ninguém curtiu";
    } else if (count === 1) {
        Contador10.textContent = `${likes10[0]} curtiu`;
    } else if (count === 2) {
        Contador10.textContent = `${likes10[0]} e ${likes10[1]} curtiram`;
    } else {
        Contador10.textContent = `${likes10[0]}, ${likes10[1]} e mais ${count - 2} pessoas curtiram`;
    }
}

const lixeira10 = document.getElementById('lixeira10');
lixeira10.addEventListener('click', () => {
    likes10 = [];
    localStorage.removeItem('likes10');
    updateContador10();
});
