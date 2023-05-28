import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../../directives/dropdown.directive';

@Component({
  selector: 'nao-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

}
