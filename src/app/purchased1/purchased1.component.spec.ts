import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchased1Component } from './purchased1.component';

describe('Purchased1Component', () => {
  let component: Purchased1Component;
  let fixture: ComponentFixture<Purchased1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Purchased1Component]
    });
    fixture = TestBed.createComponent(Purchased1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
