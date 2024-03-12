import { Component, EventEmitter, Output } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cin!: string;
  name!: string;
  fonction!: string;

  link !: string[] ; 

  public login(){
    if(this.fonction == "etudient"){
      return ['/pageEtudiant/', this.cin];
    }else {
      return ['/pageEnsiegnent/', this.cin];
    }
  }


}
