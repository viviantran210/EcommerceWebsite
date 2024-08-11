import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlushiesComponent } from './plushies.component';

describe('PlushiesComponent', () => {
  let component: PlushiesComponent;
  let fixture: ComponentFixture<PlushiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlushiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlushiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
