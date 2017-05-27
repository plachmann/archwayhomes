import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AidenComponent } from './aiden.component';

describe('AidenComponent', () => {
  let component: AidenComponent;
  let fixture: ComponentFixture<AidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
