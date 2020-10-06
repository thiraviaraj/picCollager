import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

import { UserActionTypes, loadUsers, loadUsersSuccess, loadUsersFailure } from '../actions/user.actions'
@Injectable()
export class ConfigEffects {
  authState: Observable<firebase.User>;
  userDetails: firebase.User = null;
  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType<any>(UserActionTypes.GetUser),
      mergeMap((action) => this.authState
      .pipe(
        map(data => {
          return (loadUsersSuccess());
        }),
        catchError((errorMessage) => of(loadUsersFailure({error: errorMessage})))
      ))
  );

  constructor(private actions$: Actions, private store: Store<any>, public auth: AngularFireAuth) {
    this.authState = this.auth.authState;
  }

}
