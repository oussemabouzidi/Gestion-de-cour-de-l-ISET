import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireEnsComponent } from './commentaire-ens.component';

describe('CommentaireEnsComponent', () => {
  let component: CommentaireEnsComponent;
  let fixture: ComponentFixture<CommentaireEnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentaireEnsComponent]
    });
    fixture = TestBed.createComponent(CommentaireEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
