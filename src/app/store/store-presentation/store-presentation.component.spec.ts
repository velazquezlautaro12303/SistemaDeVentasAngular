import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorePresentationComponent } from './store-presentation.component';

describe('StorePresentationComponent', () => {
  let component: StorePresentationComponent;
  let fixture: ComponentFixture<StorePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorePresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
