import { TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';


 
describe('LikeWidgetComponent', () => {
  let Component: LikeWidgetComponent= null;

  beforeEach(async  () => { //async na Totvs não se usa mais
    await TestBed.configureTestingModule({
      declarations:[LikeWidgetComponent],
      
    }).compileComponents();
    
  })

  it('', () => {
    
  });
});
