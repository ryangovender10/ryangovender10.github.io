import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FivestepsComponent } from './fivesteps.component';

describe('FivestepsComponent', () => {
  let component: FivestepsComponent;
  let fixture: ComponentFixture<FivestepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FivestepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FivestepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
