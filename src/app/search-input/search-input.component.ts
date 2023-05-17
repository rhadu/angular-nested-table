import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'nao-search-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
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
