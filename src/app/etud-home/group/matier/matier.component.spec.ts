import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatierComponent } from './matier.component';

describe('MatierComponent', () => {
  let component: MatierComponent;
  let fixture: ComponentFixture<MatierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatierComponent]
    });
    fixture = TestBed.createComponent(MatierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
