import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourEnsComponent } from './cour-ens.component';

describe('CourEnsComponent', () => {
  let component: CourEnsComponent;
  let fixture: ComponentFixture<CourEnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourEnsComponent]
    });
    fixture = TestBed.createComponent(CourEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
