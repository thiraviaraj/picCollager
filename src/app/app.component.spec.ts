import { TestBed, async, inject, flush } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

describe('AppComponent', () => {
  let coursesServiceSpy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(()=>{
    });
  }));
});
