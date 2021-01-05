import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "Grid Card Layout";
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features =
      [
        {
          type: 'Argilach Data Visualizations',
          description:'This is a data visualization template made using Angular on the front-end, MySQL to pull in data from a database and express to act as the API. Chart.js was the visualization tool and it is very capable. It has many libraries that can easily be used using simple JSON structures and can be made dynamic using the right algorithim.',
          image: 'Argilach.jpg',
          link: ''
        },
        {
          type: 'MEAN Stack UI',
          description: 'This is a UI a built fas an improvement for a prior MEAN stack application that has built in CRUD operations. This in an improvement of the UI.',
          image: 'MEAN.jpg',
          link: 'MEAN.jpg'
        },
        {
          type: 'IM Chatting Ap',
          description: 'The NYC skyline from the shore',
          image: 'ChatApp.jpg',
          link: ''
        },
        {
          type: 'TensorFlow AI Visualization',
          description: 'Electric city fills up this photo with lighting that can be seen from space',
          image: 'TensorPoc.jpg',
          link: 'TensorPOC'
        },
        {
          type: '',
          description: 'Dark blues with a changing sunset in the background',
          image: 'LiteDash.jpg',
          link: 'components'
        },
        {
          type: 'HttpClient',
          description: 'A busy night in a city that never stops moving',
          image: 'city7.webp',
          link: 'httpclient'
        }
      ];

  }

  ngOnInit(): void {
    this.titleService.setTitle('Angular11');
    this.meta.addTag({
      name: 'author',
      content: 'Patrick Kendall'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.0.5 et bootstrap 5.0.0' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
