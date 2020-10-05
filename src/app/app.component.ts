import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

export interface Item { name: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  imageList = [];
  private itemDoc: AngularFirestoreDocument<Item>;
  count$: Observable<any>;
  item: Observable<Item>;
  constructor(private afs: AngularFirestore, private store: Store<any>) {
    this.itemDoc = afs.doc<Item>('items/1');
    this.item = this.itemDoc.valueChanges();
    this.count$ = store.pipe(select('config'));
    console.log(this.item);
  }
  ngOnInit() {
  }
  clicked = -1;
  increaseByOne() {
    this.clicked += 1;
  }
  onConfigChange(files) {
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = e => this.imageList.push(reader.result);
      reader.readAsDataURL(file);
    }
  }
}
