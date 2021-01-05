import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  name = new FormControl('');
  releaseDate = new FormControl('');
  franchise = new FormControl('');
  budget = new FormControl('');
  worldwide = new FormControl('');
  summary = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.updateControls();
  }

  updateControls(): void {
    this.name.setValue('Star Wars');
    this.releaseDate.setValue('26/04/2019');
    this.franchise.setValue(true);
    this.budget.setValue('356000000');
    this.worldwide.setValue('2797800564');
    this.summary.setValue('Set in a long time ago in a galaxy far, far away.');
  }

  resetControls(): void {
    this.name.setValue(null);
    this.releaseDate.setValue(null);
    this.franchise.setValue(null);
    this.budget.setValue(null);
    this.worldwide.setValue(null);
    this.summary.setValue(null);
  }

}
