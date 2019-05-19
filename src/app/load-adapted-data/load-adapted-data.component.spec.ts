import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAdaptedDataComponent } from './load-adapted-data.component';

describe('LoadAdaptedDataComponent', () => {
  let component: LoadAdaptedDataComponent;
  let fixture: ComponentFixture<LoadAdaptedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadAdaptedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAdaptedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
