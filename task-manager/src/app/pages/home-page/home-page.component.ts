import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TaskBoxComponent } from '../../components/task-box/task-box.component';
import { TaskLineComponent } from '../../components/task-line/task-line.component';
import Cookie from 'cookiejs';
import { Router } from '@angular/router';
import { NewTaskBoxComponent } from '../../components/new-task-box/new-task-box.component';
import { NewProjectBoxComponent } from '../../components/new-project-box/new-project-box.component';
import { ApiProjectService } from '../../service/api-project/api-project.service';
import { ApiUserService } from '../../service/api-user/api-user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskLineComponent,
    TaskBoxComponent,
    NewTaskBoxComponent,
    NewProjectBoxComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  styleNewTaskForm: string = 'displayNone'
  styleNewProjectForm: string = 'displayNone'
  projects!: any[]
  projectsPrevious!: any[]
  users!: any[]
  filtersForm!: FormGroup

  @ViewChild(NewTaskBoxComponent) newTaskFormBox!: NewTaskBoxComponent;

  constructor(private router: Router, private apiProject: ApiProjectService, private apiUser: ApiUserService, private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      user_id: [''],
      tags: [''],
    });
    this.setDatas()
  }

  async setDatas() {
    this.projects = await this.apiProject.getAllProjects()
    this.projectsPrevious = await this.apiProject.getAllProjects()
    this.users = await this.apiUser.getAllUsers()
    this.newTaskFormBox.projects = this.projects
    this.newTaskFormBox.users = this.users
  }

  filterProjects() {
    let projectsTab = []
    this.projects = this.projectsPrevious
    console.log(this.filtersForm.value)
    const userId = this.filtersForm.value.user_id
    console.log(userId)

    for (let i = 0; i < this.projects.length; i++) {
      projectsTab.push(this.projects[i])
      projectsTab[i].Tasks = []
      for (let j = 0; j < this.projects[i].Tasks.length; j++) {
        if (this.projects[i].Tasks[j].user_id === userId) {
          projectsTab[i].Tasks.push(this.projects[i].Tasks[j])
        }
      }
    }
    this.projects = projectsTab
  }

  resetFilters() {
    window.location.reload();
  }

  changeStyleTaskForm(event: any): void {
    this.styleNewTaskForm = event
  }

  changeStyleProjectForm(event: any): void {
    this.styleNewProjectForm = event
  }

  openNewTaskForm() {
    this.styleNewTaskForm = ''
  }

  openNewProjectForm() {
    this.styleNewProjectForm = ''
  }
}
