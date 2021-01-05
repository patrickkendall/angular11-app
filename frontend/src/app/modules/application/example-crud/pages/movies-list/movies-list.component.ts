import { Component, OnInit } from '@angular/core';
import { Injector } from '@angular/core';

import { PageListComponent } from '../../components/page-list/page-list.component';

@Component({
  selector: 'app-movies-list-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent extends PageListComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  initialize(): void {

    this.endpoint = 'movies';
    this.link = 'movies';
    this.placeholder = 'Search movies';
    this.results = 'Movies';
    this.found = 'movies';
    this.creation = 'Movie';
    this.loaded = false;
    this.icon = 'fas fa-film';
    this.itemsCount = 0;
    this.itemsPerPage = 5;
    this.linkRoute = 'movies';

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
        type: 'smallimg',
        title: { caption: 'Img', class: 'font-weight-bold text-center' },
        data: { field: 'image', class: 'font-weight-bold text-center', height: 129, width: 90 }
      },
      {
        title: { caption: 'Name', class: 'text-dark font-weight-bold text-center' },
        data: { field: 'name', class: 'text-dark font-weight-bold text-center' }
      },
      {
        title: { caption: 'Date', class: 'font-weight-bold text-center' },
        data: { field: 'releaseDate', class: 'text-center' }
      },
    ];

    super.initialize();
  }

}
