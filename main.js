import { Etudiant } from './etudiant.js';
let etu1 = new Etudiant("Ould Taya 1", "52444A555", 2015);
etu1.nomComplet = "Macky SALL";
console.log(etu1.numCarte);
console.log(etu1);
console.log("Hello world !!!");
// alert("Bonsoir CFPP 2022 !!!")
let age = 45;
let univ = "Universit√© Gaston Berger";
// console.log("Votre age est " + age + " Univ: " + univ.toUpperCase())
console.log(`Votre age est  + ${age} +  Univ:  + ${univ.toUpperCase()}`);
function compter(val) {
    for (let index = 0; index < val; index++) {
        console.log(index);
    }
}
compter(20);
let pers = {
    nom: "Diouf",
    prenom: "Abdou",
    taille: 2.10
};
console.log(` Nom:${pers.nom} ${pers.prenom} Taille: ${pers.taille} m`);
let val;
val = 4;
val = true;
val = ['d', 555];
val = "ddddddddddddddddddddd";
let str1 = null;
let str2 = "Contenu de Str2";
let str3 = str1 !== null && str1 !== void 0 ? str1 : str2;
str1 !== null && str1 !== void 0 ? str1 : (str1 = "Mamadou");
str1 !== null && str1 !== void 0 ? str1 : (str1 = "Moussa");
console.log("Str1 = " + str1);
let nbr = 8;
nbr % 2 == 0 ? console.log(nbr + " est pair")
    : console.log(nbr + " est impair");
let tab = [10, 15, 17, 5];
for (let j = 0; j < tab.length; j++) {
    console.log(`Tab[${j}]= ${tab[j]}`);
}
console.log("###############################");
for (const it of tab) {
    console.log(it);
}
console.log("###############################");
for (const key in tab) {
    if (Object.prototype.hasOwnProperty.call(tab, key)) {
        const element = tab[key];
        console.log(element);
    }
}
console.log("###############################");
tab.forEach(element => {
    console.log(element);
});
console.log("###############################");
function somme(val1 = 0, val2 = 0) {
    return val1 + val2;
}
let sommebis = (val1 = 0, val2 = 0) => val1 + val2;
// let val3 = somme()
// console.log("La somme est " + val3);
// console.log(somme("Macky", " SALL"));
let val3 = sommebis();
console.log("La somme est " + val3);
console.log(sommebis("Macky", " SALL"));
