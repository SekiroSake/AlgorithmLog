import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogFinishedQuestionComponent } from './log-finished-question.component';

describe('LogFinishedQuestionComponent', () => {
  let component: LogFinishedQuestionComponent;
  let fixture: ComponentFixture<LogFinishedQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogFinishedQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogFinishedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
