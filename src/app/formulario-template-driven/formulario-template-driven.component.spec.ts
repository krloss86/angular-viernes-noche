import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemplateDrivenComponent } from './formulario-template-driven.component';

describe('FormularioTemplateDrivenComponent', () => {
  let component: FormularioTemplateDrivenComponent;
  let fixture: ComponentFixture<FormularioTemplateDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTemplateDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
