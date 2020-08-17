import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaControlesComponent } from './conta-controles.component';

describe('ContaControlesComponent', () => {
  let component: ContaControlesComponent;
  let fixture: ComponentFixture<ContaControlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaControlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
