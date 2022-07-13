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
  foi configurado uma outra maneira de abrir o firefox junto com o chrome.
  Quando eu rodar esse teste, eu vou rodar contra os browsers que são
  comuns de qualquer sistema operacional,
  no caso eu vou fazer só com Chrome e Firefox
  */
  
  

  
});

