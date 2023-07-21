import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompingListComponent } from './comping-list.component';

describe('CompingListComponent', () => {
  let component: CompingListComponent;
  let fixture: ComponentFixture<CompingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
