import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/app/models/matiere';
import { EtudientService } from '../../services/etudient.service';

@Component({
  selector: 'app-matier',
  templateUrl: './matier.component.html',
  styleUrls: ['./matier.component.css']
})
export class MatierComponent implements OnInit{
  Matieres !: Matiere[] ;
  chercher !: String ;
  

  constructor(private EtudService: EtudientService) {}

  ngOnInit(): void {
    this.EtudService.getMatier().subscribe(
      (data: Matiere[]) => {
        if (data) {
          this.Matieres = data;
        }
      }
    );
  }



}
