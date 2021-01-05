import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxicClassComponent } from './toxic-class.component';

describe('ToxicClassComponent', () => {
  let component: ToxicClassComponent;
  let fixture: ComponentFixture<ToxicClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToxicClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxicClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
