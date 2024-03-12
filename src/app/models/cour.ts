export class Cour {
    public id : Number ;
    public nom : String ;
    public description : String ;
    public Date : String ;
    public fichier : String ;
    public idMat : Number ;

    public constructor(id : Number , nom : String , desc : String , date : String , fich : String, id_mat : Number){
        this.id = id ;
        this.nom = nom ;
        this.description = desc ;
        this.Date = date ;
        this.fichier = fich ;
        this.idMat = id_mat ;
    }


}
