import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlibrosComponent } from './adminlibros.component';

describe('AdminlibrosComponent', () => {
  let component: AdminlibrosComponent;
  let fixture: ComponentFixture<AdminlibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
