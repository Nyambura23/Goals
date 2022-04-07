import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDetaiComponent } from './goal-detai.component';

describe('GoalDetaiComponent', () => {
  let component: GoalDetaiComponent;
  let fixture: ComponentFixture<GoalDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
