import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsgHomeComponent } from './ensg-home.component';

describe('EnsgHomeComponent', () => {
  let component: EnsgHomeComponent;
  let fixture: ComponentFixture<EnsgHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnsgHomeComponent]
    });
    fixture = TestBed.createComponent(EnsgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
