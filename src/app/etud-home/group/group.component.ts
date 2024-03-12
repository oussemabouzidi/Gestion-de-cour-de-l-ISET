import { Component, Input, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/groupe';
import { EtudientService } from '../services/etudient.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  @Input() nom_group!: String;
  class!: Groupe;
  listGroup!: Groupe[];

  constructor(private EtudService: EtudientService) {}

  ngOnInit(): void {
    this.EtudService.getGroup().subscribe(
      (data: Groupe[]) => {
        if (data) {
          this.listGroup = data;

          for (let i = 0; i < this.listGroup.length; i++) {
            if (this.listGroup[i].nom == this.nom_group) {
              this.class = { ...this.listGroup[i] };
              break;
            }
          }
        }
      }
    );
  }
}
