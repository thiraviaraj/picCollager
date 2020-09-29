import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-collageviewer',
  templateUrl: './collageviewer.component.html',
  styleUrls: ['./collageviewer.component.scss']
})
export class CollageviewerComponent implements OnInit, OnChanges {
  @Input('data') data = [];
  constructor() { }
ngOnChanges(changes: any) {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  console.log(this.data);
  // this.data = this.data;
}
  ngOnInit(): void {
  }

}
