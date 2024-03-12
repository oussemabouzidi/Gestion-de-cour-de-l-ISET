import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { commentaire } from 'src/app/models/commentaire';
import { Cour } from 'src/app/models/cour';
import { Enseignant } from 'src/app/models/enseignant';
import { Etudient } from 'src/app/models/etudient';
import { Groupe } from 'src/app/models/groupe';
import { Matiere } from 'src/app/models/matiere';

@Injectable({
  providedIn: 'root'
})
export class EtudientService {

  constructor(private http : HttpClient) { }
  getEtudient(){
    return this.http.get<Etudient[]>('http://localhost:3000/etudiants');
  }
  getGroup(){
    return this.http.get<Groupe[]>('http://localhost:3000/groupes');
  }
  getMatier(){
    return this.http.get<Matiere[]>('http://localhost:3000/matieres') ;
  }
  getCour(){
    return this.http.get<Cour[]>('http://localhost:3000/cours') ;
  }
  getEnsg(){
    return this.http.get<Enseignant[]>('http://localhost:3000/Enseigenets');
  }
  getCmt(){
    return this.http.get<commentaire[]>('http://localhost:3000/commentaire');
  }

  postCour(c: Cour){
    return this.http.post('http://localhost:3000/cours' , c)
  }

  postCmt(c: commentaire){
    return this.http.post('http://localhost:3000/commentaire', c);
  }

}
