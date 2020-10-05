import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-collageviewer",
  templateUrl: "./collageviewer.component.html",
  styleUrls: ["./collageviewer.component.scss"]
})
export class CollageviewerComponent implements OnInit, OnChanges {
  @Input("data") data = [];
  config$: Observable<any>;
  constructor(private store: Store<any>) {
    this.config$ = store.pipe(select("config"));
  }
  ngOnChanges(changes: any) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(this.data);
    // this.data = this.data;
  }
  ngOnInit(): void {}
}
