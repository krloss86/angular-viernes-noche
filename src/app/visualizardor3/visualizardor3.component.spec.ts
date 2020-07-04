import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizardor3Component } from './visualizardor3.component';

describe('Visualizardor3Component', () => {
  let component: Visualizardor3Component;
  let fixture: ComponentFixture<Visualizardor3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Visualizardor3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Visualizardor3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
