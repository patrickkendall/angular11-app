import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location = window.location.href;
  title = 'angular-starter';
  version = 'Angular version 11.0.5';
  items = [
    {
      name: 'Forms', link: 'reactive-form',
      elements: [
        /*
        { name: 'Prototype', link: 'reactive-form/prototype' },
        { name: 'Form-Control', link: 'reactive-form/form-control' },
        { name: 'Form-Control-Class', link: 'reactive-form/form-control-class' },
        */
        { name: 'Form-Group', link: 'reactive-form/form-group' },
        /*
        { name: 'Form-Builder', link: 'reactive-form/form-builder' },
        { name: 'Form-Builder-Nested', link: 'reactive-form/form-builder-nested' },
        { name: 'Form-Array', link: 'reactive-form/form-array' },
        { name: 'Form-Multi', link: 'reactive-form/form-multi' },
        */
      ]
    },
    {
      name: 'Features', link: 'Features',
      elements: [
        { name: 'Chart.js Charts', link: 'charts' },
        { name: 'Leaflet', link: 'leaflet' },
        /* { name: 'Movies-Images-List', link: 'movies-images-list' }, */
        { name: 'HttpClient', link: 'httpclient' },
        { name: 'Template-Driven-Forms', link: 'template-driven-forms' },
        { name: 'Components', link: 'components' },
        { name: 'Services', link: 'services' },
      ]
    },
    {
      name: 'CRUD', link: 'crud',
      elements: [
        //{ name: 'Continents', link: 'crud/continents' },
        //{ name: 'Countries', link: 'crud/countries' },
        //{ name: 'Cities', link: 'crud/cities' },
        { name: 'Shows', link: 'crud/shows' },
        /* { name: 'Movies', link: 'crud/movies' }, */
        { name: 'Shows-Images', link: 'crud/shows-images' },
        /* { name: 'Movies-Images', link: 'crud/movies-images' }, */
      ]
    },
    {
      name: 'Sandbox', link: 'typescript',
      elements: [
        { name: 'Toxic-Class', link: 'typescript/toxic-class' },
      ]
    },
  ];

  constructor(
    public router: Router,
    public renderer: Renderer2) { }

  onSelectMenu(link: any): void {
    const element = document.getElementById('bd-docs-nav');
    this.renderer.removeClass(element, 'show');
    const route = '/' + link;
    this.router.navigate([route]);
    this.location = window.location.href;
  }


}

