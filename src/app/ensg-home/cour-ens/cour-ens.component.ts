import { Component, Input, OnInit } from '@angular/core';
import { EtudientService } from 'src/app/etud-home/services/etudient.service';
import { Cour } from 'src/app/models/cour';

@Component({
  selector: 'app-cour-ens',
  templateUrl: './cour-ens.component.html',
  styleUrls: ['./cour-ens.component.css']
})
export class CourEnsComponent implements OnInit{
  @Input() code !: Number ;
  rechercher !: Number ;
  NvCour !: Cour ;
  
  Toutcours!: Cour[];
  courMat : Cour[] = [];

  

  constructor(private EtudService: EtudientService) {}
  

  ngOnInit(): void {
    this.NvCour = new Cour(0 , "n" , "d" , "d" , "f" , 0);
    console.log(this.NvCour) ;

    this.EtudService.getCour().subscribe(
      (data: Cour[]) => {
        if (data) {
          this.Toutcours = data;
          // method filtrer pour filter les cour par la matiére
          this.courMat = this.Toutcours.filter(c => c.idMat === this.code);
        }
      }
    );
  }

  id_cour_non_valid(){
    let id_non_valid = false ;
    for(let i = 0 ; i < this.Toutcours.length ; i ++ ){
      if (this.NvCour.id == this.Toutcours[i].id){
        id_non_valid = true ;
      }
    }
    return id_non_valid
  }

  cour_ajouter = false ;
  save() {
    this.NvCour.idMat = this.code ;
    console.log(this.NvCour);
    this.EtudService.postCour(this.NvCour).subscribe(
      () => this.cour_ajouter = true
    );
  }
}
