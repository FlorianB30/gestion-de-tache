import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiTaskService } from '../../service/api-task/api-task.service';
import { Router } from '@angular/router';

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
  projects!: any[]
  users!: any[]
  @Output() style = new EventEmitter<string>()

  constructor(private fb: FormBuilder, private api: ApiTaskService, private router: Router) {
    this.taskForm = this.fb.group({
      project: ['', [Validators.required]],
      title: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description: [''],
      tags: [''],
      deadline: ['', [Validators.required]],
      user: ['', [Validators.required]],
      priority: [0, [Validators.required]]
    });
  }

  async createTask() {
    if (this.taskForm.valid) {
      await this.api.createTask(this.taskForm.value)
      this.closeTaskForm()
      window.location.reload();
    }
  }

  closeTaskForm() {
    this.style.emit('displayNone')
  }
}
