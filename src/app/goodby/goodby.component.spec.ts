import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodbyComponent } from './goodby.component';

describe('GoodbyComponent', () => {
  let component: GoodbyComponent;
  let fixture: ComponentFixture<GoodbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
