import { Groupe } from "./groupe";

export class Etudient {
    public cin : string;
    nom: String;
    prenom: String;
    email : String ;
    class : String ;

    public constructor(cin : string , nom : String , prenom : String , email : String, clas: String){
        this.cin = cin ;
        this.nom = nom ;
        this.prenom = prenom ;
        this.email = email ;
        this.class = clas ;
    }



}
