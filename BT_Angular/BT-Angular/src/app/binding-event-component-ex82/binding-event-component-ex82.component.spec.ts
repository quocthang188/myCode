import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventComponentEx82Component } from './binding-event-component-ex82.component';

describe('BindingEventComponentEx82Component', () => {
  let component: BindingEventComponentEx82Component;
  let fixture: ComponentFixture<BindingEventComponentEx82Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingEventComponentEx82Component]
    });
    fixture = TestBed.createComponent(BindingEventComponentEx82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
