import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'nao-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
  public searchTerm: string = '';
  private searchTextChanged = new Subject<string>();

  constructor() {
    this.searchTextChanged.pipe(debounceTime(500)).subscribe((searchText) => {
      this.search.emit(searchText);
    });
  }

  onSearch(searchTerm: string): void {
    this.searchTextChanged.next(searchTerm);
  }
}
