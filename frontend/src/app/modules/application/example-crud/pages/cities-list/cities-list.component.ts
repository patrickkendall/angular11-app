import { Component, Injector, OnInit } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent extends PageListComponent implements OnInit {


  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'cities';
    this.link = 'cities';
    this.placeholder = 'Search cities';
    this.results = 'Cities';
    this.found = 'cities';
    this.creation = 'City';
    this.loaded = false;
    this.icon = 'fas fa-city';
    this.itemsCount = 0;
    this.itemsPerPage = 10;
    this.linkRoute = 'cities';

    this.columns = [
      {
        type: 'num',
        title: { caption: 'N°', class: 'text-dark font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'N°', class: 'text-dark text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        type: 'pos',
        title: { caption: 'Pos', class: 'text-dark font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'Pos', class: 'text-dark text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        title: { caption: 'Id', class: 'text-dark font-weight-bold text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' },
        data: { field: 'id', class: 'text-dark text-center d-none d-md-table-cell d-lg-table-cell d-xl-table-cell' }
      },
      {
        type: 'wiki',
        title: { caption: 'Wiki', class: 'text-center text-dark' },
        data: { field: 'wikipediaLink', class: 'text-center text-dark' }
      },
      {
        title: { caption: 'Name', class: 'text-dark font-weight-bold text-center' },
        data: { field: 'name', class: 'text-dark font-weight-bold text-center' }
      },
      {
        type: 'checkbox',
        title: { caption: 'Capital', class: 'font-weight-bold text-center' },
        data: { field: 'capital', class: 'font-weight-bold text-center' }
      },
      {
        type: 'subfield',
        title: { caption: 'Country', class: 'text-dark font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'country',
          subfield: 'name',
          class: 'text-dark text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'img',
        title: { caption: 'Flag', class: 'text-dark font-weight-bold text-center' },
        data: { field: 'image', class: 'font-weight-bold text-center' }
      },
      {
        type: 'subfield',
        title: { caption: 'Continent', class: 'text-dark font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'continent',
          subfield: 'name',
          class: 'text-dark text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
      {
        type: 'subfield',
        title: { caption: 'Code', class: 'text-dark font-weight-bold text-center d-none d-lg-table-cell d-xl-table-cell' },
        data: {
          field: 'continent',
          subfield: 'code',
          class: 'text-dark text-center d-none d-lg-table-cell d-xl-table-cell'
        }
      },
    ];

    super.initialize();
  }

  ngOnInit() {
  }

}