import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiProjectService } from '../../service/api-project/api-project.service';

@Component({
  selector: 'app-new-project-box',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-project-box.component.html',
  styleUrl: './new-project-box.component.scss'
})
export class NewProjectBoxComponent {
  projectForm: FormGroup
  @Output() style = new EventEmitter<string>()

  constructor(private fb: FormBuilder, private api: ApiProjectService) {
    this.projectForm = this.fb.group({
      project: ['', [Validators.required]],
      title: ['', [Validators.required]],
      time: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: [''],
      deadline: ['', [Validators.required]],
      user: ['', [Validators.required]],
    });
  }

  createProject() {
    if (this.projectForm.valid) {
      if (this.api.createProject(this.projectForm.value.name)) {
        this.closeProjectForm()
      }
    }
  }

  closeProjectForm() {
    this.style.emit('displayNone')
  }
}