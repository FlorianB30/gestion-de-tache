import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTasksPageComponent } from './calendar-tasks-page.component';

describe('CalendarTasksPageComponent', () => {
  let component: CalendarTasksPageComponent;
  let fixture: ComponentFixture<CalendarTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
