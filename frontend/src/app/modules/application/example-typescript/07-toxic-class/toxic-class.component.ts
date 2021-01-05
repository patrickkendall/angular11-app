import { Component, OnInit, NgModule} from '@angular/core';
import * as toxicity from "@tensorflow-models/toxicity"
import * as tf from '@tensorflow/tfjs';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'toxic-class',
  templateUrl: './toxic-class.component.html',
  styleUrls: ['./toxic-class.component.css'],
})
export class ToxicClassComponent implements OnInit {

  constructor() {}

  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public datasets: ChartDataSets[] = [
    {
      data: [],
      label: 'Series A',
      pointRadius: 7,
    },
  ];
  public type: ChartType = 'scatter';

  public colors: Array<any> = [{
      backgroundColor: 'rgb(30,144,255,0.7)',
      borderColor: 'rgb(30,144,255)',
  }, {
    backgroundColor: 'black',
    borderColor: 'rgb(30,144,255)',
  }]

  public options: ChartOptions = {
    scales: {
      xAxes: [{
        ticks: {
          suggestedMin: -1,
          suggestedMax: 2,
          callback: function(label: number, _index, _labels) {
            // when the floored value is the same as the value we have a whole number
            if (Math.floor(label) === label) {
                return label;
            }

        },
        }
      }]
    }
  };

  buffer = document.getElementById("buffer");
  emoji = document.getElementById("emoji");
  leftEye = document.getElementById("leftEye");
  rightEye = document.getElementById("rightEye");
  mouth = document.getElementById("mouth");
  

  inputPhrase = "";
  outputPhrase: OutputPhrase[] = [];
  outputScatter = []
  toxicity;
  lastUpdateTime = -999;
  isToxic;
  pointValue;
  pointStart;
  pointEnd;
  toxicValue = 0;
  threshold = 0.9; //Min threshold
  updateInterval = setInterval(this.checkTime, 250);

  ngOnInit() {
    console.log('Using TensorFlow backend: ', tf.getBackend());
  }

  onChange() {
    console.log('Using TensorFlow backend: ', tf.getBackend());
  }

  recordUpdateTime(){
    var currentDay = new Date();
    var currentTime = currentDay.getTime();
    this.lastUpdateTime = currentTime;
  }

  async checkTime(buffer: string){
    var value: string = buffer;
    var currentDay = new Date();
    var currentTime = currentDay.getTime();
    if (Math.abs(currentTime - this.lastUpdateTime) >= 500)   {
      this.updateEmoji(value);
    }
  }

  updateEmoji(value: string){
    var toxicPoint: number = 0;
    this.inputPhrase = value;
    toxicity.load(this.threshold,["identity_attack", "insult", "obscene", "severe_toxicity", "sexual_explicit", "threat", "toxicity"]).then(model => {
    const sentences = this.inputPhrase;
      
    model.classify(sentences).then(predictions => {
      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.
      this.pointValue = predictions[predictions.length - 1].results[0];
      this.pointValue = JSON.stringify(this.pointValue);
      this.pointStart = this.pointValue.search("\"1\"");
      this.pointEnd = this.pointValue.search("}");
      this.pointValue = this.pointValue.substring(this.pointStart,this.pointEnd);
      this.pointStart = this.pointValue.search(":");
      this.pointValue = this.pointValue.substring(this.pointStart + 1,this.pointEnd);
      this.pointValue = parseFloat(this.pointValue);
      this.isToxic = predictions[predictions.length - 1].results[0].match;
      this.toxicity = this.isToxic;
      var output: OutputPhrase = {
        phrase: sentences,
        isToxic: this.isToxic,
        toxicScore: this.pointValue
      }
      if (output.isToxic) this.toxicValue = 1; else this.toxicValue = 0;
      var scatterValue = {
        x: this.toxicValue,
        y: parseFloat(this.pointValue)
      } 
      this.outputPhrase.push(output);
      this.outputScatter.push(scatterValue);
      this.datasets[0].data = this.outputScatter
      console.log("The phrase and guess is:" + JSON.stringify(this.outputPhrase));
    });
  });
}}

interface OutputPhrase {
  phrase: string,
  isToxic: boolean,
  toxicScore: number
}