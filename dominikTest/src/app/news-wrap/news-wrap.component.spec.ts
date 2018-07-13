import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWrapComponent } from './news-wrap.component';

describe('NewsWrapComponent', () => {
  let component: NewsWrapComponent;
  let fixture: ComponentFixture<NewsWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
