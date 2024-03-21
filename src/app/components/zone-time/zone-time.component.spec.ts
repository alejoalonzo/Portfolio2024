import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTimeComponent } from './zone-time.component';

describe('ZoneTimeComponent', () => {
  let component: ZoneTimeComponent;
  let fixture: ComponentFixture<ZoneTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
