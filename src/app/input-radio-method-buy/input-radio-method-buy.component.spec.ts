import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputRadioMethodBuyComponent } from './input-radio-method-buy.component';

describe('InputRadioMethodBuyComponent', () => {
  let component: InputRadioMethodBuyComponent;
  let fixture: ComponentFixture<InputRadioMethodBuyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputRadioMethodBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputRadioMethodBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
