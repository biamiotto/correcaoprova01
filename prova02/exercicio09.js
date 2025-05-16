let gols = [2, 3, 0, 5, 1];
let jogadores = ["Leo", "Sam" , "Nina" , "Gabi" , "Caio"];

let maisGols = gols[0];
let artilheiro = jogadores[0];

for (let i = 1; i < gols.length; i++) {
    if (gols[i] > maisGols) {
        maisGols = gols[i];
        artilheiro = i;
    }
}

console.log(`O Artilheiro foi ${jogadores[artilheiro]} com ${maisGols} gols!`);

