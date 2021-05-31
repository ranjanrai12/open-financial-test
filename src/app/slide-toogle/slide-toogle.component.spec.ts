import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToogleComponent } from './slide-toogle.component';

describe('SlideToogleComponent', () => {
  let component: SlideToogleComponent;
  let fixture: ComponentFixture<SlideToogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
