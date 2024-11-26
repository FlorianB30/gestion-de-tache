import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-line',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task-line.component.html',
  styleUrl: './task-line.component.scss'
})
export class TaskLineComponent {
  @Input() task!: any
}
