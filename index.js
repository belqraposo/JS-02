let age = 20;
if(age >= 18){
    console.log('Maior de 18!');
}else{
    console.log('Não é maior de 18!');
}

let idade = 20;
let humano = true;
if((idade >= 18) && (humano === true)){
    console.log('Humano e maior de 18!');
}else{
    console.log('Não é humano e/ou maior de 18!')
}

let aniversario = 'Janeiro';
if((aniversario === 'Janeiro') || (aniversario === 'Dezembro')){
    console.log('É seu aniversário');
}else{
    console.log('Não é seu aniversário');
} 

let nome = 'Isabel';
if(nome [0] == 'R'){
    console.log('Seu nome começa com R!');
}else{
    console.log('Seu nome não começa com R!');
}


let name = 'Isabel';
let sobrenome = 'Queiroz';
if((sobrenome.length >= 6) || (name [0] == 'E')){
    console.log('Seu sobrenome tem 6 ou mais letras! E/ou começa com E!');
}else{
    console.log('Seu sobrenome não tem 6 ou mais letras! E/ou não começa com E!');
}
