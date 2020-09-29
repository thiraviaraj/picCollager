import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-collager-config',
  templateUrl: './collager-config.component.html',
  styleUrls: ['./collager-config.component.scss']
})
export class CollagerConfigComponent implements OnInit {
  @Output('onConfigChange') onConfigChange = new EventEmitter();;
  constructor() { }

  ngOnInit(): void {
  }

  imageAdded(files) {
    this.onConfigChange.emit(files);
  }
}
