import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingPropertyComponentEx79Component } from './binding-property-component-ex79.component';

describe('BindingPropertyComponentEx79Component', () => {
  let component: BindingPropertyComponentEx79Component;
  let fixture: ComponentFixture<BindingPropertyComponentEx79Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingPropertyComponentEx79Component]
    });
    fixture = TestBed.createComponent(BindingPropertyComponentEx79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
