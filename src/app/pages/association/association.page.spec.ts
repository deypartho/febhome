import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssociationPage } from './association.page';

describe('AssociationPage', () => {
  let component: AssociationPage;
  let fixture: ComponentFixture<AssociationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
