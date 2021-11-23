export class Etudiant {
    // private _nomComplet: string
    // private _numCarte: string
    // private _promo: number

    // constructor(nomC: string, numC: string, promo: number) {
    //     this._nomComplet = nomC
    //     this._numCarte = numC
    //     this._promo = promo
    // }
    constructor(private _nomComplet: string,
        private _numCarte: string,
        private _promo: number) { }

    public set nomComplet(value: string) {
        this._nomComplet = value
    }

    public get nomComplet() {
        return this._nomComplet
    }
    public get numCarte() {
        return this._numCarte
    }
    public get promo() {
        return this._promo
    }

}