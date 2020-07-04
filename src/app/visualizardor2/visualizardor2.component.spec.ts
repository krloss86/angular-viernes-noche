import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Visualizardor2Component } from './visualizardor2.component';

describe('Visualizardor2Component', () => {
  let component: Visualizardor2Component;
  let fixture: ComponentFixture<Visualizardor2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Visualizardor2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Visualizardor2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
