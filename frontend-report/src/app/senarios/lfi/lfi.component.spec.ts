import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFIComponent } from './lfi.component';

describe('LFIComponent', () => {
  let component: LFIComponent;
  let fixture: ComponentFixture<LFIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LFIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LFIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
