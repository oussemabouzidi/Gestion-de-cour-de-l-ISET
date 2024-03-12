import { Component, Input } from '@angular/core';
import { EtudientService } from 'src/app/etud-home/services/etudient.service';
import { commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  @Input() code !: Number ;
  cmts !: commentaire[] ;
  cmtsCour !: commentaire[] ;
  button : String = "Afficher";
  afficher : boolean = false ;
  NvCmt !: commentaire ;

  afficherCommentaire(){
    if(this.afficher == false){
      this.afficher = true ;
      this.button = "Cacher" ;
    }else{
      this.afficher = false ;
      this.button = "Afficher" ;
    }
  }

  constructor(private EtudService: EtudientService) {}
  ngOnInit(): void {
    this.NvCmt = new commentaire(0,"t" , "b" , 0) ;
    this.EtudService.getCmt().subscribe(
      (data: commentaire[]) => {
        if (data) {
          this.cmts = data;
        }
      }
    );
  }

  contorlId(){
    let id_non_valide = false ;
    for(let i = 0 ; i < this.cmts.length ;i ++){
      if(this.NvCmt.id == this.cmts[i].id){
        id_non_valide = true ;
      }
    }
    return id_non_valide ;
  }

  cmt_ajouter = false ;
  ajouterCommentaire(){
    this.NvCmt.id_cour = this.code
    if(this.NvCmt){
      if(this.contorlId() == false){
        console.log(this.NvCmt);
        this.EtudService.postCmt(this.NvCmt).subscribe(
          () => this.cmt_ajouter = true
        );
      }
    }
  }
}
