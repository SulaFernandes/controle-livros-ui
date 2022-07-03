import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="temErro()" class="p-message p-message-error">
      {{ text }}
    </div>
  `,
  styles: [`
  :host ::ng-deep {

    .p-message-error: {
      padding: 3px;
      margin: 0;
      margin-top: 4px;
    }
  }
  `
  ]
})
export class MessageComponent implements OnInit {

  @Input() error!: string;
  @Input()
  control: FormControl = new FormControl;
  @Input() text!: string;

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
