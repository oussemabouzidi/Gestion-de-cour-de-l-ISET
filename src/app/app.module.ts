import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EtudHomeComponent } from './etud-home/etud-home.component';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './etud-home/group/group.component';
import { MatierComponent } from './etud-home/group/matier/matier.component';
import { CourComponent } from './etud-home/group/matier/cour/cour.component';
import { PageIntovableComponent } from './page-intovable/page-intovable.component';
import { CommentaireComponent } from './etud-home/group/matier/cour/commentaire/commentaire.component';
import { EnsgHomeComponent } from './ensg-home/ensg-home.component';
import { CourEnsComponent } from './ensg-home/cour-ens/cour-ens.component';
import { CommentaireEnsComponent } from './ensg-home/cour-ens/commentaire-ens/commentaire-ens.component';

const ROUTES : Routes = [
  {path : 'login' , component : LoginComponent},
  {path: 'pageEtudiant/:cin', component: EtudHomeComponent },
  {path: 'pageEnsiegnent/:cin', component: EnsgHomeComponent},
  {path: '**' , component: PageIntovableComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EtudHomeComponent,
    GroupComponent,
    MatierComponent,
    CourComponent,
    PageIntovableComponent,
    CommentaireComponent,
    EnsgHomeComponent,
    CourEnsComponent,
    CommentaireEnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    [FormsModule],
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
