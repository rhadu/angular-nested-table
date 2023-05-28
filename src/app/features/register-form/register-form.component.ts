import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleService, Title } from '../../title.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'nao-register-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit, AfterViewInit {
  titles: Title[] = [];
  profileForm = this.fb.group({
    title: [''],
    firstName: [''],
    lastName: ['', Validators.required],
    termsAccepted: [''],
  });

  constructor(private titleService: TitleService, private fb: FormBuilder) {
    this.titleService
      .getTitles()
      .pipe(
        takeUntilDestroyed(),
        map((titles) =>
          titles
            .filter((title) => title.name !== '!')
            .sort((a, b) => a.name.localeCompare(b.name))
        )
      )
      .subscribe((titles) => {
        this.titles = titles;
      });
  }

  @ViewChild('accessId') accessId!: ElementRef;
  ngAfterViewInit(): void {
    this.accessId.nativeElement.value = "Jogny"
  }

  submit() {
    if (this.profileForm.valid) {
      let result = this.profileForm.value;
      console.log(result);
    } else {
      Object.keys(this.profileForm.controls).forEach((field) => {
        const control = this.profileForm.get(field)!;
        control.markAsTouched({ onlySelf: true });
        control.markAsDirty();
      });
    }
  }

  ngOnInit(): void {}
}
