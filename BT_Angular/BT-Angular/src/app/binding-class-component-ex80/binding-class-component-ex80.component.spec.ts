import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingClassComponentEx80Component } from './binding-class-component-ex80.component';

describe('BindingClassComponentEx80Component', () => {
  let component: BindingClassComponentEx80Component;
  let fixture: ComponentFixture<BindingClassComponentEx80Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingClassComponentEx80Component]
    });
    fixture = TestBed.createComponent(BindingClassComponentEx80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
