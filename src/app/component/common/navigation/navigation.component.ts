import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Store, select } from "@ngrx/store";
import { loadConfigs } from "src/app/actions/config.actions";
import { loadUsers, loadUsersSuccess } from "src/app/actions/user.actions";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  authState: Observable<firebase.User>;
  userDetails: firebase.User = null;
  config$: Observable<any>;
  constructor(public auth: AngularFireAuth, private store: Store<any>) {
    this.config$ = store.pipe(select("config"));
    // let newAuthState = {...this.authState};
    this.store.dispatch(loadUsers({data: 1}));
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
}
