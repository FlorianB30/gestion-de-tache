import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskBoxComponent } from './new-task-box.component';

describe('NewTaskBoxComponent', () => {
  let component: NewTaskBoxComponent;
  let fixture: ComponentFixture<NewTaskBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTaskBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
