import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhatwedodetailPage } from './whatwedodetail.page';

describe('WhatwedodetailPage', () => {
  let component: WhatwedodetailPage;
  let fixture: ComponentFixture<WhatwedodetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatwedodetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhatwedodetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
