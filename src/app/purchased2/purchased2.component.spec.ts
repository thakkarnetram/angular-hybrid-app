import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchased2Component } from './purchased2.component';

describe('Purchased2Component', () => {
  let component: Purchased2Component;
  let fixture: ComponentFixture<Purchased2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Purchased2Component]
    });
    fixture = TestBed.createComponent(Purchased2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
