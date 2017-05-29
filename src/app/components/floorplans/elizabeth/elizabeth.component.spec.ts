import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElizabethComponent } from './elizabeth.component';

describe('ElizabethComponent', () => {
  let component: ElizabethComponent;
  let fixture: ComponentFixture<ElizabethComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElizabethComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElizabethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
