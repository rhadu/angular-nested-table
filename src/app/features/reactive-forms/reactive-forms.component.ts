import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'nao-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      userData: this.fb.group({
        username: ['', [Validators.required, this.forbiddenNames.bind(this)]],
        email: [
          '',
          [Validators.required, Validators.email],
          this.forbiddenEmail,
        ],
      }),
      gender: ['male'],
      hobbies: this.fb.array([]),
    });

    this.signupForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signupForm.statusChanges.subscribe((value) => {
      console.log(value);
    });

    // setValue() // patchValue() // reset()
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  get signupFormHobbies() {
    return this.signupForm.get('hobbies') as FormArray;
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    this.signupFormHobbies.push(control);
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (this.forbiddenUsernames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmail({ value }: FormControl): Promise<{ [s: string]: boolean }> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }
}
