import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandaceComponent } from './candace.component';

describe('CandaceComponent', () => {
  let component: CandaceComponent;
  let fixture: ComponentFixture<CandaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
