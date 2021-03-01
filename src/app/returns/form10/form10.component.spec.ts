import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form10Component } from './form10.component';

describe('Form10Component', () => {
  let component: Form10Component;
  let fixture: ComponentFixture<Form10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
