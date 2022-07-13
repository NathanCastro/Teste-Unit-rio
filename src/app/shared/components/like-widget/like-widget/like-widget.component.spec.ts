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
    Serve para saber a saúde do teste, te dar uma cobertura
    aparece uma lista com as porcentagens dos testes.
    Esse coverage summary, tem statements, branches, functions, lines.

    lines: lines é fácil se eu chegar aqui abrir o meu código, cadê o meu teste like widget Aqui o meu componentes,
    like-widget.component.ts, uma linha, duas linhas, três linhas, quantidade de linhas, isso aqui é fácil,
    matamos na hora, a quantidade de linhas que estamos testando no nosso código.

    statement :et x = 10; console.log(x)
    quantas linhas eu tenho aqui? Uma. Mas quantos statements? Duas.
    Então isso aqui let x =10; é um statement, e isso aqui console.log(x) é outro statement.

    branches:le testa se todas as estruturas decisórias do seu código foram testadas,
    por exemplo, se você tem um if e você só passou pelo if e não caiu no else,
    ele ia indicar para você que tem alguma
    coisa faltando aqui porque você não caiu na árvore, na estrutura decisória.

    functions: aqui isso aqui vale tanto para um nome de funções e de métodos que foram testados,
    isso aqui te dá uma introdução para você saber a saúde do seu teste coverage,
  */
  
  

  
});

