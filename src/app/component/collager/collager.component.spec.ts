import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollagerComponent } from './collager.component';

describe('CollagerComponent', () => {
  let component: CollagerComponent;
  let fixture: ComponentFixture<CollagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
