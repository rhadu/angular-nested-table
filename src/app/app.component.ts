import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import DataItem from './dataItem';

@Component({
  selector: 'nao-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: DataItem[] = [
    {
      name: 'Susans Boyle',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
    },
    {
      name: 'Marc Johnson',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: ' 169 11th Street, 94103 San Francisco ads ad ss',
    },
    {
      name: 'PiedPiper',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: ' 169 11th Street, 94103 San Francisco ads ad ss',
      children: [
        {
          name: 'Children 1',
          type: 'company',
          email: '1 - someone@gmail.com',
          phoneNo: '1 - +1 628 291 2098',
          companyName: '1 -',
          address: '1 - 169 11th Street, 94103 San Francisco',
          children: [
            {
              name: 'Children 21',
              type: 'company',
              email: '21 - someone@gmail.com',
              phoneNo: '21 - +1 628 291 2098',
              companyName: '21 -',
              address: '21 - 169 11th Street, 94103 San Francisco',
            },
            {
              name: 'Children 31',
              type: 'company',
              email: '31 - someone@gmail.com',
              phoneNo: '31 - +1 628 291 2098',
              companyName: '31 -',
              address: '31 - 169 11th Street, 94103 San Francisco',
            },
          ],
        },
        {
          name: 'Children 2',
          type: 'company',
          email: '2 - someone@gmail.com',
          phoneNo: '2 - +1 628 291 2098',
          companyName: '2 -',
          address: '2 - 169 11th Street, 94103 San Francisco',
          children: [
            {
              name: 'Children 21',
              type: 'company',
              email: '21 - someone@gmail.com',
              phoneNo: '21 - +1 628 291 2098',
              companyName: '21 -',
              address: '21 - 169 11th Street, 94103 San Francisco',
            },
            {
              name: 'Children 31',
              type: 'company',
              email: '31 - someone@gmail.com',
              phoneNo: '31 - +1 628 291 2098',
              companyName: '31 -',
              address: '31 - 169 11th Street, 94103 San Francisco',
            },
          ],
        },
        {
          name: 'Children 3',
          type: 'company',
          email: '3 - someone@gmail.com',
          phoneNo: '3 - +1 628 291 2098',
          companyName: '3 -',
          address: '3 - 169 11th Street, 94103 San Francisco',
        },
      ],
    },
    {
      name: 'PiedPiper',
      type: 'company',
      email: 'someone_at_very_lonng_long_long@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: '',
      address: '169 11th Street, 94103 San Francisco',
    },
    {
      name: 'PiedPiper',
      type: 'company',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: '',
      address: '169 11th Street, 94103 San Francisco',
      children: [
        {
          name: 'Children 21',
          type: 'company',
          email: '21 - someone@gmail.com',
          phoneNo: '21 - +1 628 291 2098',
          companyName: '21 -',
          address: '21 - 169 11th Street, 94103 San Francisco',
        },
        {
          name: 'Children 31',
          type: 'company',
          email: '31 - someone@gmail.com',
          phoneNo: '31 - +1 628 291 2098',
          companyName: '31 -',
          address: '31 - 169 11th Street, 94103 San Francisco',
        },
      ],
    },
    {
      name: 'PiedPiper',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
    },
    {
      name: 'Florin Galan',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
    },
    {
      name: 'March Andreesen',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      children: [
        {
          name: 'Andreesen',
          type: 'company',
          email: '21 - someone@gmail.com',
          phoneNo: '21 - +1 628 291 2098',
          companyName: '21 -',
          address: '21 - 169 11th Street, 94103 San Francisco',
        },
        {
          name: 'Space X',
          type: 'company',
          email: '31 - someone@gmail.com',
          phoneNo: '31 - +1 628 291 2098',
          companyName: '31 -',
          address: '31 - 169 11th Street, 94103 San Francisco',
        },
      ],
    },
    {
      name: 'Ben Horowitz',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
    },
  ];

  isAnyRowSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  selectAllRows(event: Event) {
    const isChecked = (<HTMLInputElement>event.target).checked;
    this.updateRowSelection(this.data, isChecked);
    this.isAnyRowSelected = isChecked;
  }

  updateRowSelection(data: DataItem[], isChecked: boolean) {
    data.forEach((row) => {
      row.isSelected = isChecked;
      if (row.children) {
        this.updateRowSelection(row.children, isChecked);
      }
    });
  }

  onCheckboxChange() {
    this.isAnyRowSelected = this.checkRowSelection(this.data);
  }

  checkRowSelection(data: DataItem[]): boolean {
    for (const row of data) {
      if (row.isSelected || this.checkRowSelection(row.children || [])) {
        return true;
      }
    }
    return false;
  }
}
