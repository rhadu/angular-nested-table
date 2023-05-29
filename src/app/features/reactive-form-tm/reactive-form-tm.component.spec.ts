import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormTMComponent } from './reactive-form-tm.component';

describe('ReactiveFormTMComponent', () => {
  let component: ReactiveFormTMComponent;
  let fixture: ComponentFixture<ReactiveFormTMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormTMComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
