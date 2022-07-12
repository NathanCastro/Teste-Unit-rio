import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

 
fdescribe('LikeWidgetComponent', () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async  () => { //async na Totvs não se usa mais
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();
    
    fixture = TestBed.createComponent(LikeWidgetComponent)
    component = fixture.componentInstance;
  })

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should auto generate ID when id input property is missing', () => {    
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });
  it('should NOT generate ID when id input propertu is present', () => {    
    const someId = 'someId';
    component.id= someId
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.likeWidgetComponentClik.name}
    should trigger emission when called`, () => {    
    fixture.detectChanges();
    const spyEmit = spyOn(component.likedWidgetComponent, 'emit')    
    component.likeWidgetComponentClik();    
    expect(spyEmit).toHaveBeenCalled();
  });


  
  /*
    it(`#${LikeWidgetComponent.prototype.like.name}
      should trigger (@Output liked) when called`, () => {
          fixture.detectChanges();
          component.like();
          expect(component.liked.emit).toHaveBeenCalled();
      }
    );
    O teste falhará, pois a chamada de toHaveBeenCalled espera um spy.

    Podemos corrigir o código transformando o método em um spy através
    da chamada de spyOn(component.liked, 'emit').
  */
  
  

  
});

