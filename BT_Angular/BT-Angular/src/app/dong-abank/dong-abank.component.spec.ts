import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongABankComponent } from './dong-abank.component';

describe('DongABankComponent', () => {
  let component: DongABankComponent;
  let fixture: ComponentFixture<DongABankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DongABankComponent]
    });
    fixture = TestBed.createComponent(DongABankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
