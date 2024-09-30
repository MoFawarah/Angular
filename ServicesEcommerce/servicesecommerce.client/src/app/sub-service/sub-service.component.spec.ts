import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubServicesComponent } from './sub-service.component';

describe('SubServiceComponent', () => {
  let component: SubServicesComponent;
  let fixture: ComponentFixture<SubServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
