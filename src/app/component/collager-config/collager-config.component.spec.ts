import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagerConfigComponent } from './collager-config.component';

describe('CollagerConfigComponent', () => {
  let component: CollagerConfigComponent;
  let fixture: ComponentFixture<CollagerConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagerConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollagerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
