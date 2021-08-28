import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-micro-feedback',
  templateUrl: './micro-feedback.component.html',
  styleUrls: ['./micro-feedback.component.scss'],
})
export class MicroFeedbackComponent implements OnInit {
  questionDone: boolean = false;
  yes: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleYes() {
    this.questionDone = true;
    this.yes = true;
  }

  handleNo() {
    this.questionDone = true;
    this.yes = false;
  }
}
