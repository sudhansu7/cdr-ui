import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCdrComponent } from './list-cdr.component';

describe('ListCdrComponent', () => {
  let component: ListCdrComponent;
  let fixture: ComponentFixture<ListCdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
