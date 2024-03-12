import { Matiere } from "./matiere";

export class Groupe {
    code_class : Number ;
    nom : String ;
    nbr_place : Number ;

    public constructor (code : Number , nom : String , place : Number){
        this.code_class = code ;
        this.nom = nom ;
        this.nbr_place = place ;
    }

}
