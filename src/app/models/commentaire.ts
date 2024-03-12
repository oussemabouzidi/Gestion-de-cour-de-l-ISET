export class commentaire{
    public id : Number ;
    public entete : String ;
    public body : String ;
    public id_cour : Number ;

    constructor(i: Number,t : String , b : String , id : Number){
        this.id = i ;
        this.entete = t ;
        this.body = b ;
        this.id_cour = id ;
    }
}