import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDirectorComponent } from './card-director.component';

describe('CardDirectorComponent', () => {
  let component: CardDirectorComponent;
  let fixture: ComponentFixture<CardDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
