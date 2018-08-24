import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmoothDndComponent } from './smooth-dnd.component';

describe('SmoothDndComponent', () => {
  let component: SmoothDndComponent;
  let fixture: ComponentFixture<SmoothDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmoothDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmoothDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
