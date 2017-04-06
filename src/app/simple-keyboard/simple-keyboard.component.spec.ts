import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleKeyboardComponent } from './simple-keyboard.component';

describe('SimpleKeyboardComponent', () => {
  let component: SimpleKeyboardComponent;
  let fixture: ComponentFixture<SimpleKeyboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleKeyboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
