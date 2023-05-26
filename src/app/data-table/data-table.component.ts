import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import DataItem from '../dataItem';
import { ColumnResizeDirective } from '../shared/directives/column-resize.directive';

@Component({
  selector: 'nao-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ColumnResizeDirective],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() data: DataItem[] = [];
  @Input() searchTerm: string = '';
  chunkSize: number = 10;

  filteredData: DataItem[] = [];
  displayData: DataItem[] = [];
  isAnyRowSelected: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.filteredData = this.searchData(this.data, this.searchTerm);
      this.resetDisplayData()
    }
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.filteredData = this.data;
    this.resetDisplayData();
  }

  onScroll(event: any) {
    const target = event.target;
    const scrollPosition = target.scrollTop + target.offsetHeight;
    const scrollHeight = target.scrollHeight;

    if (scrollPosition >= scrollHeight) {
      this.loadMoreData();
    }
  }
  
  resetDisplayData() {
    this.displayData = this.filteredData.slice(0, this.chunkSize);
  }

  loadMoreData() {
    const startIndex = this.displayData.length;
    const endIndex = startIndex + this.chunkSize;
    const newChunk = this.filteredData.slice(startIndex, endIndex);

    this.displayData.push(...newChunk);
  }

  selectAllRows(isChecked: boolean): void {
    this.updateRowSelection(this.filteredData, isChecked);
    this.isAnyRowSelected = isChecked;
  }

  updateRowSelection(data: DataItem[], isChecked: boolean): void {
    data.forEach((row) => {
      row.isSelected = isChecked;
      if (row.children) {
        this.updateRowSelection(row.children, isChecked);
      }
    });
  }

  onCheckboxChange() {
    this.isAnyRowSelected = this.checkRowSelection(this.filteredData);
  }

  checkRowSelection(data: DataItem[]): boolean {
    for (const row of data) {
      if (row.isSelected || this.checkRowSelection(row.children || [])) {
        return true;
      }
    }
    return false;
  }

  searchData(data: DataItem[], searchText: string): DataItem[] {
    if (!searchText) {
      return data;
    }

    const clonedData = data.map((row) => {
      const newRow = { ...row };
      newRow.children = this.searchData(newRow.children || [], searchText);
      if (newRow.children.length > 0) {
        newRow.expanded = true;
      }
      return newRow;
    });

    const result = clonedData.filter((row) => {
      const match = row.name.toLowerCase().includes(searchText.toLowerCase());
      return match || (row.children && row.children.length);
    });

    return result;
  }
}
