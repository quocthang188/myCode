import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayComponentEx84Component } from './binding-two-way-component-ex84.component';

describe('BindingTwoWayComponentEx84Component', () => {
  let component: BindingTwoWayComponentEx84Component;
  let fixture: ComponentFixture<BindingTwoWayComponentEx84Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingTwoWayComponentEx84Component]
    });
    fixture = TestBed.createComponent(BindingTwoWayComponentEx84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
