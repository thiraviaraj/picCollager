import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollageviewerComponent } from './collageviewer.component';

describe('CollageviewerComponent', () => {
  let component: CollageviewerComponent;
  let fixture: ComponentFixture<CollageviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollageviewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollageviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
