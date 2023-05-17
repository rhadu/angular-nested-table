# Angular Table with Column Resizing

This project is an Angular application featuring a dynamic table with column resizing, search functionality, and expandable nested rows.

## Features

- Table with expandable nested rows
- Column resizing with min-width and max-width support
- Search by name functionality with debounce time
- Column ellipsis for long content
- Horizontal scrollbar when the table width exceeds container width

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (12.x or later)
- Angular CLI (12.x or later)

### Installation

1. Clone the project repository:

```sh
git clone https://github.com/rhadu/angular-nested-table.git
```

2. Install the dependencies:

```sh
cd angular-nested-table
npm install
```

3. Start the development server:

```sh
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

- Click and drag on the column header's drag handle to resize the column.
- Type in the search input to filter the table rows by name.
- Click on the arrow icon in the row to expand or collapse nested rows.

## Folder Structure

The folder structure of the project is organized as follows:

```
src/
|-- app/
    |-- data-table/
        |-- data-table.component.html
        |-- data-table.component.ts
        |-- data-table.component.scss
    |-- search-input/
        |-- search-input.component.html
        |-- search-input.component.ts
        |-- search-input.component.scss
    |-- shared/
        |-- directives/
            |-- column-resize.directive.ts
    |-- app.component.html
    |-- app.component.ts
    |-- app.config.ts
    |-- dataItem.ts
|-- assets/
|-- index.html
|-- styles.scss
|-- main.ts
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 