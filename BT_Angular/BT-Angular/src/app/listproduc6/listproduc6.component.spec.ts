import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listproduc6Component } from './listproduc6.component';

describe('Listproduc6Component', () => {
  let component: Listproduc6Component;
  let fixture: ComponentFixture<Listproduc6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listproduc6Component]
    });
    fixture = TestBed.createComponent(Listproduc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
