let numeroAlunos = 5;

let listaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo"]; //com array

for(let i = 0; i < listaAlunos.length; i++) { 
    //console.log(i) comentamos para exibir o contador junto do par/ímpar concatenando/interpolando abaixo.

    if(i == 0) {
        console.log(i + ": ZERO: " + listaAlunos[i]); //concatenação
    } else if(i % 2 == 1) {
        console.log(`${i}: ÍMPAR: ${listaAlunos[i]}`); //interpolação - template strings
    } else {
        console.log(`${i}: PAR: ${listaAlunos[i]}`); 
    }
}

//a seguir, exemplo com while.

/*let contador = 0; //sempre criar as variáveis fora do while.

while (contador < listaAlunos.length) {

    if (contador == 0) {
        console.log(contador + ": ZERO");
    } else if (contador % 2 == 1) {
        console.log(`${contador}: ÍMPAR`);
    } else {
        console.log(`${contador}: PAR`);
    }

    contador++;
} */