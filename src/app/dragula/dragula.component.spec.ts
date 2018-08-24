import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragulaComponent } from './dragula.component';

describe('DragulaComponent', () => {
  let component: DragulaComponent;
  let fixture: ComponentFixture<DragulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
