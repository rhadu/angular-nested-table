import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

type SecretValues = 'pet' | 'teacher';
interface ISecret {
  value: SecretValues;
  question: string;
}

const initialQuestions: ISecret[] = [
  {
    value: 'pet',
    question: 'Your first Pet name?',
  },
  {
    value: 'teacher',
    question: 'Your first Teacher name?',
  },
];

class User {
  constructor(
    public username: string = '',
    public email: string = '',
    public question: string = '',
    public answer: string = ''
  ) {}
}

@Component({
  selector: 'nao-simple-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent {
  @ViewChild('myForm') signupForm!: NgForm;
  defaultSecret: SecretValues = 'pet';
  secretQuestions: ISecret[] = initialQuestions;
  questionAnswer: string = '';
  user = new User();

  suggestName(): void {
    // this.signupForm.setValue({});
    this.signupForm.form.patchValue({
      username: 'Joonnyy',
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      console.log('Form is not valid');
      return;
    }

    const { username, email, secret, questionAnswer } = this.signupForm.value;

    this.user = {
      username,
      email,
      question: `Your first ${secret} name`,
      answer: questionAnswer,
    };

    this.signupForm.reset()
  }
}
