import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistadetallelibroComponent } from './vistadetallelibro.component';

describe('VistadetallelibroComponent', () => {
  let component: VistadetallelibroComponent;
  let fixture: ComponentFixture<VistadetallelibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistadetallelibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistadetallelibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
