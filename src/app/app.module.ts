import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CollagerComponent } from './component/collager/collager.component';
import { NavigationComponent } from './component/common/navigation/navigation.component';
import { CollagerConfigComponent } from './component/collager-config/collager-config.component';
import { CollageviewerComponent } from './component/collageviewer/collageviewer.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './effects/config.effects';
const config = {
  apiKey: "AIzaSyA2OllHBf8BSMeo-Xc9A9Wij9VYe0tP5jg",
  authDomain: "myfbproject-104c0.firebaseapp.com",
  databaseURL: "https://myfbproject-104c0.firebaseio.com",
  projectId: "myfbproject-104c0",
  storageBucket: "myfbproject-104c0.appspot.com",
  messagingSenderId: "676573109219",
  appId: "1:676573109219:web:95428770c301b30ef41ed6",
  measurementId: "G-FTVQ03601N"
};

@NgModule({
  declarations: [
    AppComponent,
    CollagerComponent,
    NavigationComponent,
    CollagerConfigComponent,
    CollageviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ConfigEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
