import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminescritoresComponent } from './adminescritores.component';

describe('AdminescritoresComponent', () => {
  let component: AdminescritoresComponent;
  let fixture: ComponentFixture<AdminescritoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminescritoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminescritoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
