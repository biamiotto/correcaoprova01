let nivel = 38;

if (nivel >= 50) {
    console.log("Voce pode atacar os chefões, entrar em eventos especiais e participar de combates normais")
}else if (nivel >= 40) {
    console.log("Voce pode entrar em eventos especiais e participar de combates normais");
}else if (nivel >= 20) {
    console.log("Voce pode participar de combates normais");
}else {
    console.log("Voce ainda está começando, jogue em modos iniciais!");
}
