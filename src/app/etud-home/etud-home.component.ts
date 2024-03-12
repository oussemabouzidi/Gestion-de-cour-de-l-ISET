import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Etudient } from '../models/etudient';
import { EtudientService } from './services/etudient.service';

@Component({
  selector: 'app-etud-home',
  templateUrl: './etud-home.component.html',
  styleUrls: ['./etud-home.component.css']
})
export class EtudHomeComponent implements OnInit {
  cin!: String;
  listEtudient!: Etudient[];
  Etudient!: Etudient;

  constructor(private route: ActivatedRoute, private EtudService: EtudientService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cinParam = params.get('cin');
      if (cinParam !== null) {
        this.cin = cinParam;
      }
    });

    this.EtudService.getEtudient().subscribe(
      (data: Etudient[]) => {
        if (data) {
          this.listEtudient = data;

          for (let i = 0; i < this.listEtudient.length; i++) {
            if (this.listEtudient[i].cin == this.cin) {
              this.Etudient = { ...this.listEtudient[i] };
              break;
            }
          }
        }
      }
    );
  }
}