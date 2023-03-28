import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllMessageComponent } from './see-all-message.component';

describe('SeeAllMessageComponent', () => {
  let component: SeeAllMessageComponent;
  let fixture: ComponentFixture<SeeAllMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAllMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAllMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
