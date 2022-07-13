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

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {    
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should NOT auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {    
    const someId = 'someId';
    component.id= someId
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.likeWidgetComponentClik.name}
    should trigger (@output likedWidgetComponent) when called`, () => {    
    fixture.detectChanges();
    const spyEmit = spyOn(component.likedWidgetComponent, 'emit')    
    component.likeWidgetComponentClik();    
    expect(spyEmit).toHaveBeenCalled();
  });


  
  /*
  Uma versão q roda em memória sem a interface gráfica, que o usuário interage
  consome menos memória
  Internet explore e safari não possuem versão Headless

  É muito mais rápido sem a interface.

  Utilizando --watch=false ele faz com que o teste rode e pare, pra não ficar no modo (watch) 
  */
  
  

  
});

