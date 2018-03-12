import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmohComponent } from './emoh.component';

describe('EmohComponent', () => {
  let component: EmohComponent;
  let fixture: ComponentFixture<EmohComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmohComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
