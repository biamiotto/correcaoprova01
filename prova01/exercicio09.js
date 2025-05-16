let tempos = [312, 298, 345, 301, 289, 330, 310, 299];
let nomes = ["  Atlas", "Optimus", "Nova" , "Bolt" , "Titan" , "Zeus" , "Echo" , "Shadow"];

let menorTempo = tempos[0];
let indiceMnenor = 0;

for (let i = 0; i < tempos.length; i++) {
    if (tempos[i] < menorTempo) {
        menorTempo = tempos[i];
        indiceMnenor = i;
    }
}

console.log("O robo campeão foi " + nomes[indiceMnenor] + " Com o menor tempo de " + menorTempo + 
    " segundos! ");
