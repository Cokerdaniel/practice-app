import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManComponentComponent } from './man-component.component';

describe('ManComponentComponent', () => {
  let component: ManComponentComponent;
  let fixture: ComponentFixture<ManComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
