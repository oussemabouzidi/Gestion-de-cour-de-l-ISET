
export class Enseignant {
    cin : string ;
    nom : String ;
    prenom : String ;
    matiere : String ;
    Class : String[] ;

    public constructor(cin : string , nom : String , prenom : String , matiere : String , c : String[]){
        this.cin = cin ;
        this.nom = nom ;
        this.prenom = prenom ;
        this.matiere = matiere ;
        this.Class = c ;
    }
}
