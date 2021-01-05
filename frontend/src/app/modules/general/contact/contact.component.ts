import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  features: any;
  dependencies: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML' },
        { name: 'CSS' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'REST APIs' },
        { name: 'CRUD' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular',
          englishTutorial: 'https://www.ganatan.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'React',
          englishTutorial: 'https://www.ganatan.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/routing-avec-angular',
        },
        {
          name: 'JavaScript',
          englishTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'TypeScript',
          englishTutorial: 'https://www.ganatan.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'HTML',
          englishTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.ganatan.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'CSS',
          englishTutorial: 'https://www.ganatan.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Express',
          englishTutorial: 'https://www.ganatan.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'MongoDB',
          englishTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Firebase',
          englishTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.ganatan.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'MySQL',
          englishTutorial: null,
          frenchTutorial: 'https://www.ganatan.com/tutorials/components-avec-angular',
        },
        {
          name: 'Linux',
          englishTutorial: null,
          frenchTutorial: 'https://www.ganatan.com/tutorials/services-avec-angular',
        },
        {
          name: 'Node.js',
          englishTutorial: null,
          frenchTutorial: null,
        },
      ],
    };

  }

  ngOnInit(): void {
  }

}
