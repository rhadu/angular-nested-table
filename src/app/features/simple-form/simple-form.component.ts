import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'nao-simple-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent {
  onSubmit({ value }: NgForm) {
    console.log(value);
  }
}
