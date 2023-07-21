import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompingComponent } from './add-comping.component';

describe('AddCompingComponent', () => {
  let component: AddCompingComponent;
  let fixture: ComponentFixture<AddCompingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
