import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = new FormGroup({
    name: new FormControl(''),
    releaseDate: new FormControl(''),
    franchise: new FormControl(''),
    budget: new FormControl(''),
    worldwide: new FormControl(''),
    summary: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Star Wars IV: A New Hope',
      releaseDate: '05/25/1977',
      franchise: true,
      budget: 11000000,
      worldwide: 7758000000,
      summary: 'A long time ago in a galaxy far, far away...'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: null,
      budget: null,
      worldwide: null,
      summary: null,
    });
  }

}
