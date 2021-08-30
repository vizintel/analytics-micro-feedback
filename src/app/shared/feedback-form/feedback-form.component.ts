import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent implements OnInit {
  @Input() yes: boolean = false;
  acknowledge: string = '';
  label: string = '';
  placeholder: string = '';

  feedbackForm = new FormGroup({
    textArea: new FormControl('', Validators.maxLength(256)),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.yes) {
      this.acknowledge = 'We’re glad this feature helped.';
      this.label = 'Anything else you’d like us to know? (Optional)';
      this.placeholder = 'I found it helpful because ...';
    } else {
      this.acknowledge = 'Thanks for letting us know.';
      this.label = 'How can we make this more helpful? (Optional)';
      this.placeholder = 'This could be more helpful ...';
    }
  }

  onSubmit() {
    console.log(this.feedbackForm);
  }
}
