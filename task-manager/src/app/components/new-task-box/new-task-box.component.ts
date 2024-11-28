import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiTaskService } from '../../service/api-task/api-task.service';

@Component({
  selector: 'app-new-task-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-task-box.component.html',
  styleUrl: './new-task-box.component.scss'
})
export class NewTaskBoxComponent {
  taskForm: FormGroup
  @Input() projects!: any[]
  @Output() style = new EventEmitter<string>()

  constructor(private fb: FormBuilder, private api: ApiTaskService) {
    this.taskForm = this.fb.group({
      project: ['', [Validators.required]],
      title: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      deadline: ['', [Validators.required]],
      user: ['', [Validators.required]],
    });
  }

  createTask() {
    if (this.taskForm.valid) {
      if (this.api.createTask(this.taskForm.value.project, this.taskForm.value.title, this.taskForm.value.time, this.taskForm.value.description, this.taskForm.value.tags, this.taskForm.value.deadline, this.taskForm.value.user)) {
        this.closeTaskForm()
      }
    }
  }

  closeTaskForm() {
    this.style.emit('displayNone')
  }
}
