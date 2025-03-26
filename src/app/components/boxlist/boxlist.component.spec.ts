import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxlistComponent } from './boxlist.component';

describe('BoxlistComponent', () => {
  let component: BoxlistComponent;
  let fixture: ComponentFixture<BoxlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
