export class Etudiant {
    // private _nomComplet: string
    // private _numCarte: string
    // private _promo: number
    // constructor(nomC: string, numC: string, promo: number) {
    //     this._nomComplet = nomC
    //     this._numCarte = numC
    //     this._promo = promo
    // }
    constructor(_nomComplet, _numCarte, _promo) {
        this._nomComplet = _nomComplet;
        this._numCarte = _numCarte;
        this._promo = _promo;
    }
    set nomComplet(value) {
        this._nomComplet = value;
    }
    get nomComplet() {
        return this._nomComplet;
    }
    get numCarte() {
        return this._numCarte;
    }
    get promo() {
        return this._promo;
    }
}
