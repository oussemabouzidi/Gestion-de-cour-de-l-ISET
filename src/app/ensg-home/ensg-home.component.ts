import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { EtudientService } from '../etud-home/services/etudient.service';
import { Enseignant } from '../models/enseignant';
import { Matiere } from '../models/matiere';
import { Cour } from '../models/cour';

@Component({
  selector: 'app-ensg-home',
  templateUrl: './ensg-home.component.html',
  styleUrls: ['./ensg-home.component.css']
})
export class EnsgHomeComponent implements OnInit {
  cin !: String ;
  TabEns !: Enseignant[];
  enseingient !: Enseignant;
  TabMat !: Matiere[];
  matier !: Matiere;
  constructor(private EtudService : EtudientService , private route: ActivatedRoute){}
  
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const cinParam = params.get('cin');
      if (cinParam !== null) {
        this.cin = cinParam;
      }
    });

    this.EtudService.getEnsg().subscribe(
      (data: Enseignant[]) => {
        if (data) {
          this.TabEns = data;
  
          for (let i = 0; i < this.TabEns.length; i++) {
            if (this.TabEns[i].cin == this.cin) {
              this.enseingient = { ...this.TabEns[i] };
              break;
            }
          }
        }
      }
    );

    this.EtudService.getMatier().subscribe(
      (data : Matiere[]) => {
        if (data){
          this.TabMat = data

          for(let j = 0 ; j < this.TabMat.length ; j++){
            if(this.TabMat[j].nom == this.enseingient.matiere){
              this.matier = this.TabMat[j] ;
              break ;
            }
          }
        }
      }
    )

  }

}
