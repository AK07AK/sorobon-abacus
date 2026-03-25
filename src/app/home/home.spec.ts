import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOme } from './home';

describe('HOme', () => {
  let component: HOme;
  let fixture: ComponentFixture<HOme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HOme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOme);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
