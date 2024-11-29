import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DecimalToHourPipe } from '../../pipes/decimalToHour/decimal-to-hour.pipe';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiTaskService } from '../../service/api-task/api-task.service';

@Component({
  selector: 'app-task-line',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DecimalToHourPipe
  ],
  templateUrl: './task-line.component.html',
  styleUrl: './task-line.component.scss'
})
export class TaskLineComponent implements OnInit {
  @Input() task!: any
  taskUpdateForm!: FormGroup

  constructor(private fb: FormBuilder, private api: ApiTaskService) { }

  ngOnInit(): void {
    this.taskUpdateForm = this.fb.group({
      title: [this.task.title, [Validators.required]],
      deadline: [this.task.deadline, [Validators.required]],
      time_done: [this.task.time_done, [Validators.required]],
      time_expected: [this.task.time_expected, [Validators.required]],
      task_id: [this.task.task_id]
    });

    this.taskUpdateForm.disable()
  }

  editTask() {
    this.taskUpdateForm.enable()
  }

  updateTask() {
    if (this.taskUpdateForm.valid) {
      this.api.updateTask(this.taskUpdateForm.value)
      this.taskUpdateForm.disable()
    }
  }
}
