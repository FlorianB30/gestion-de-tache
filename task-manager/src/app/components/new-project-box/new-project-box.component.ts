import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiProjectService } from '../../service/api-project/api-project.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private api: ApiProjectService, private router: Router) {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  async createProject() {
    if (this.projectForm.valid) {
      await this.api.createProject(this.projectForm.value.name)
      this.closeProjectForm()
      window.location.reload();
    }
  }

  closeProjectForm() {
    this.style.emit('displayNone')
  }
}
