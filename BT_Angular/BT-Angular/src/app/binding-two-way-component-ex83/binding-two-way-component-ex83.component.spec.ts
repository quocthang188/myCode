import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayComponentEx83Component } from './binding-two-way-component-ex83.component';

describe('BindingTwoWayComponentEx83Component', () => {
  let component: BindingTwoWayComponentEx83Component;
  let fixture: ComponentFixture<BindingTwoWayComponentEx83Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingTwoWayComponentEx83Component]
    });
    fixture = TestBed.createComponent(BindingTwoWayComponentEx83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
