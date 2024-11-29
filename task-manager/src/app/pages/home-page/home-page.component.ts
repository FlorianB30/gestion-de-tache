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

@Component({
    selector: 'app-home-page',
    imports: [
        CommonModule,
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
  users!: any[]

  @ViewChild(NewTaskBoxComponent) newTaskFormBox!: NewTaskBoxComponent;

  constructor(private router: Router, private apiProject: ApiProjectService, private apiUser: ApiUserService) {
    this.setDatas()
  }

  async setDatas() {
    this.projects = await this.apiProject.getAllProjects()
    this.users = await this.apiUser.getAllUsers()
    this.newTaskFormBox.projects = this.projects
    this.newTaskFormBox.users = this.users
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
