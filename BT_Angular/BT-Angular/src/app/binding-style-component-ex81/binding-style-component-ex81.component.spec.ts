import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingStyleComponentEx81Component } from './binding-style-component-ex81.component';

describe('BindingStyleComponentEx81Component', () => {
  let component: BindingStyleComponentEx81Component;
  let fixture: ComponentFixture<BindingStyleComponentEx81Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingStyleComponentEx81Component]
    });
    fixture = TestBed.createComponent(BindingStyleComponentEx81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
