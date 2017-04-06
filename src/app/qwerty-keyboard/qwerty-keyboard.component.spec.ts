import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QwertyKeyboardComponent } from './qwerty-keyboard.component';

describe('QwertyKeyboardComponent', () => {
  let component: QwertyKeyboardComponent;
  let fixture: ComponentFixture<QwertyKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QwertyKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QwertyKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
