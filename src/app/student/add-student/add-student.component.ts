import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent implements OnInit {

  @Input() name: any;
  @Output() selectedInputChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  inputHandler(event: any) {
    this.selectedInputChange.emit(event.target.value)
  }
}
