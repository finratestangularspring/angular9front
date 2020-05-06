import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonenumberformComponent } from './telephonenumberform.component';

describe('TelephonenumberformComponent', () => {
  let component: TelephonenumberformComponent;
  let fixture: ComponentFixture<TelephonenumberformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonenumberformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonenumberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
