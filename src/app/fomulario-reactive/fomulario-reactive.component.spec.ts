import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FomularioReactiveComponent } from './fomulario-reactive.component';

describe('FomularioReactiveComponent', () => {
  let component: FomularioReactiveComponent;
  let fixture: ComponentFixture<FomularioReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FomularioReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FomularioReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
