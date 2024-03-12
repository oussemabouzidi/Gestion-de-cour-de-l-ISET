import { Component, Input } from '@angular/core';
import { EtudientService } from 'src/app/etud-home/services/etudient.service';
import { Cour } from 'src/app/models/cour';

@Component({
  selector: 'app-cour',
  templateUrl: './cour.component.html',
  styleUrls: ['./cour.component.css']
})
export class CourComponent {
  @Input() code !: Number ;
  rechercher !: Number ;
  
  Toutcours!: Cour[];
  courMat : Cour[] = [];

  

  constructor(private EtudService: EtudientService) {}
  

  ngOnInit(): void {
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
}
