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
  Relatório para Integração Contínua serve para ver relatório dos testes
  então foi add uma report(npm install -D karma-junit-reporter@2.0.1).

  Nos arquivos criados mostra o tempo dos testes, erros e etc
  */
  
  

  
});

