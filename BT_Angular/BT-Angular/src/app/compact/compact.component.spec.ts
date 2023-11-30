import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactComponent } from './compact.component';

describe('CompactComponent', () => {
  let component: CompactComponent;
  let fixture: ComponentFixture<CompactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompactComponent]
    });
    fixture = TestBed.createComponent(CompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
