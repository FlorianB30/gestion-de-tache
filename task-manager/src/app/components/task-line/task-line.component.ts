import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DecimalToHourPipe } from '../../pipes/decimalToHour/decimal-to-hour.pipe';

@Component({
    selector: 'app-task-line',
    imports: [
        CommonModule,
        DecimalToHourPipe
    ],
    templateUrl: './task-line.component.html',
    styleUrl: './task-line.component.scss'
})
export class TaskLineComponent {
  @Input() task!: any
}
