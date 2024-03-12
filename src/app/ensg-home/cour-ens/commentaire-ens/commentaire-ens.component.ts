import { Component, Input, OnInit } from '@angular/core';
import { EtudientService } from 'src/app/etud-home/services/etudient.service';
import { commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-commentaire-ens',
  templateUrl: './commentaire-ens.component.html',
  styleUrls: ['./commentaire-ens.component.css']
})
export class CommentaireEnsComponent implements OnInit{
  @Input() code !: Number ;
  cmts !: commentaire[] ;
  button : String = "Afficher";
  afficher : boolean = false ;

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
    this.EtudService.getCmt().subscribe(
      (data: commentaire[]) => {
        if (data) {
          this.cmts = data;
        }
      }
    );
  }
}
