let Personne = function (nom, prenom,job,lieuJob,sexe) {

    this.nom = nom;
    this.prenom = prenom;
    this.job = job;
    this.city = lieuJob;
    this.sexe = sexe;

    this.getPersonne = function () {
        return "la personne est " + this.nom + " " + this.prenom + " c' est un/une "  + this.job + " qui travaille en " + this.city
            + "  et c'est un / une " + this.sexe;
    }

}

// création des persos
let array = [];

let chan = new Personne('Chan', 'Jacky','acteur,réalisateur, chanteur', 'Chine', 'homme');
let paul = new Personne('Bocuse', 'Paul','cuisinier', 'France', 'homme');
let hestia = new Personne('Familia', 'Hestia', 'Déesse', 'Orario', 'femme');
let bell = new Personne('Cranel', 'Bell', 'capitaine', 'Orario', 'homme');
let bubulle = new Personne('apple', 'vert', 'bubulle', 'dans les airs', 'femme');

tableau = [
    chan,
    paul,
    hestia,
    bell,
    bubulle
];

for(let i = 0; i < tableau.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = tableau[i].getPersonne();
    document.body.appendChild(div);
}