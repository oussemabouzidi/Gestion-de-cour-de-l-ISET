import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudHomeComponent } from './etud-home.component';

describe('EtudHomeComponent', () => {
  let component: EtudHomeComponent;
  let fixture: ComponentFixture<EtudHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudHomeComponent]
    });
    fixture = TestBed.createComponent(EtudHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
