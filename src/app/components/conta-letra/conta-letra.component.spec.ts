import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaLetraComponent } from './conta-letra.component';

describe('ContaLetraComponent', () => {
  let component: ContaLetraComponent;
  let fixture: ComponentFixture<ContaLetraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaLetraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaLetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
