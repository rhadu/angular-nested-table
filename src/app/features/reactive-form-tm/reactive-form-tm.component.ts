import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'nao-reactive-form-tm',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-tm.component.html',
  styleUrls: ['./reactive-form-tm.component.scss'],
})
export class ReactiveFormTMComponent {
  form: FormGroup;
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subscription: ['Advanced'],
      password: ['', Validators.required],
      hobbies: this.formBuilder.array([]),
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
