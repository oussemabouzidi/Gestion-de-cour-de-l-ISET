import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIntovableComponent } from './page-intovable.component';

describe('PageIntovableComponent', () => {
  let component: PageIntovableComponent;
  let fixture: ComponentFixture<PageIntovableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageIntovableComponent]
    });
    fixture = TestBed.createComponent(PageIntovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
