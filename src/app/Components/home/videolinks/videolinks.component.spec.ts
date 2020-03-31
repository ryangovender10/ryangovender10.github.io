import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolinksComponent } from './videolinks.component';

describe('VideolinksComponent', () => {
  let component: VideolinksComponent;
  let fixture: ComponentFixture<VideolinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideolinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
