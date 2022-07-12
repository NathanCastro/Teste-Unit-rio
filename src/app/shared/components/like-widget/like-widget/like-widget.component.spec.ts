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
    component.likedWidgetComponent.subscribe(()=>{
      expect(true).toBeTrue();
    });
    component.likeWidgetComponentClik()
  });


  `A respeito ao teste de propriedades de output:
  
  É possível realizar a inscrição de propriedades de 
  output em nossos testes como se fossem Observables.` 



});

