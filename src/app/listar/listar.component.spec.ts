import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import { ListarComponent } from './listar.component'; 
import { EventoService } from '../service/evento.service'; 

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule // Importa el módulo para pruebas de HttpClient
      ],
      declarations: [ ListarComponent ],
      providers: [ EventoService ] // Proporciona el servicio que usa HttpClient
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dispara la detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se ha creado correctamente
  });

});

