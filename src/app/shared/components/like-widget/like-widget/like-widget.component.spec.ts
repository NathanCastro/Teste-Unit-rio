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

`Marque as opções verdadeiras a respeito da
  criação de instâncias de componentes com TestBed:

  *O método TestBed.createComponent retorna uma instância de ComponentFixture.
  *O método TestBed.createComponent recebe como parâmetro a
classe do componente que desejamos instanciar.`