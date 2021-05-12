import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaescritorComponent } from './vistaescritor.component';

describe('VistaescritorComponent', () => {
  let component: VistaescritorComponent;
  let fixture: ComponentFixture<VistaescritorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaescritorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaescritorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
