import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetProductComponent } from './target-product.component';

describe('TargetProductComponent', () => {
  let component: TargetProductComponent;
  let fixture: ComponentFixture<TargetProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
