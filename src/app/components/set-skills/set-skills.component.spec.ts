import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSkillsComponent } from './set-skills.component';

describe('SetSkillsComponent', () => {
  let component: SetSkillsComponent;
  let fixture: ComponentFixture<SetSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
