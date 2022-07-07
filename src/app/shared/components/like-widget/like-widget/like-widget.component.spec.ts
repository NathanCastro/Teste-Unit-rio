import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from 'src/app/shared/services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';

 
fdescribe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async  () => { //async na Totvs não se usa mais
    await TestBed.configureTestingModule({
      declarations:[LikeWidgetComponent],
      providers: [UniqueIdService],
      imports:[FontAwesomeModule]
    }).compileComponents();
    
    fixture = TestBed.createComponent(LikeWidgetComponent)
  })

  it('should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });
});
