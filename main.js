"use strict";
console.log("Hello world !!!");
// alert("Bonsoir CFPP 2022 !!!")
var age = 45;
var univ = "Université Gaston Berger";
// console.log("Votre age est " + age + " Univ: " + univ.toUpperCase())
console.log("Votre age est  + " + age + " +  Univ:  + " + univ.toUpperCase());
function compter(val) {
    for (var index = 0; index < val; index++) {
        console.log(index);
    }
}
compter(20);
var pers = {
    nom: "Diouf",
    prenom: "Abdou",
    taille: 2.10
};
console.log(" Nom:" + pers.nom + " " + pers.prenom + " Taille: " + pers.taille + " m");
var val;
val = 4;
val = true;
val = ['d', 555];
val = "ddddddddddddddddddddd";
var str1 = null;
var str2 = "Contenu de Str2";
var str3 = str1 !== null && str1 !== void 0 ? str1 : str2;
str1 !== null && str1 !== void 0 ? str1 : (str1 = "Mamadou");
str1 !== null && str1 !== void 0 ? str1 : (str1 = "Moussa");
console.log("Str1 = " + str1);
var nbr = 8;
nbr % 2 == 0 ? console.log(nbr + " est pair")
    : console.log(nbr + " est impair");
var tab = [10, 15, 17, 5];
for (var j = 0; j < tab.length; j++) {
    console.log("Tab[" + j + "]= " + tab[j]);
}
console.log("###############################");
for (var _i = 0, tab_1 = tab; _i < tab_1.length; _i++) {
    var it = tab_1[_i];
    console.log(it);
}
console.log("###############################");
for (var key in tab) {
    if (Object.prototype.hasOwnProperty.call(tab, key)) {
        var element = tab[key];
        console.log(element);
    }
}
console.log("###############################");
tab.forEach(function (element) {
    console.log(element);
});
