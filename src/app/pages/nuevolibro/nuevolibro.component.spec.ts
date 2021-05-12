import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevolibroComponent } from './nuevolibro.component';

describe('NuevolibroComponent', () => {
  let component: NuevolibroComponent;
  let fixture: ComponentFixture<NuevolibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevolibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevolibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
