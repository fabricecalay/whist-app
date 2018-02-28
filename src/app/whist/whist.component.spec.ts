import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhistComponent } from './whist.component';

describe('WhistComponent', () => {
  let component: WhistComponent;
  let fixture: ComponentFixture<WhistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
