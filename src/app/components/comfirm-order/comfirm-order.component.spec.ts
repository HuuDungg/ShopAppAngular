import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmOrderComponent } from './comfirm-order.component';

describe('ComfirmOrderComponent', () => {
  let component: ComfirmOrderComponent;
  let fixture: ComponentFixture<ComfirmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComfirmOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
