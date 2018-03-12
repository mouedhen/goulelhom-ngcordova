import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdisaComponent } from './edisa.component';

describe('EdisaComponent', () => {
  let component: EdisaComponent;
  let fixture: ComponentFixture<EdisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
