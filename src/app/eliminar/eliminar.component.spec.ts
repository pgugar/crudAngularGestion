import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarComponent } from './eliminar.component';
import { EventoService } from '../service/evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';  // Para simular respuestas de Observable
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Para el servicio HTTP
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EliminarComponent', () => {
  let component: EliminarComponent;
  let fixture: ComponentFixture<EliminarComponent>;
  let mockEventoService: jasmine.SpyObj<EventoService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    mockEventoService = jasmine.createSpyObj('EventoService', ['borrarEvento']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '1'  // Simula que el parámetro `id` de la URL es '1'
        }
      }
    } as unknown as ActivatedRoute;

    await TestBed.configureTestingModule({
      declarations: [EliminarComponent],
      imports: [HttpClientTestingModule],  // Módulo para pruebas con servicios HTTP
      providers: [
        { provide: EventoService, useValue: mockEventoService },  // Provee el mock del servicio
        { provide: Router, useValue: mockRouter },  // Provee el mock del Router
        { provide: ActivatedRoute, useValue: mockActivatedRoute }  // Provee el mock de ActivatedRoute
      ],
      schemas: [NO_ERRORS_SCHEMA]  // Para evitar problemas con elementos no declarados en el HTML
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // Dispara el ciclo de vida y la detección de cambios
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the correct event ID', () => {
    expect(component.id).toBe(1);  // El ID se toma del parámetro de la URL simulado
  });

  it('should call borrarEvento and navigate to /listar on success', () => {
    // Simula la respuesta exitosa del servicio
    mockEventoService.borrarEvento.and.returnValue(of({}));
    
    // Llama al método borrarEvento
    component.borrarEvento();
    
    // Verifica que el servicio fue llamado con el ID correcto
    expect(mockEventoService.borrarEvento).toHaveBeenCalledWith(1);
    
    // Verifica que se haya navegado a la ruta '/listar'
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/listar']);
    
    // Verifica que el mensaje de éxito se haya establecido
    expect(component.mensaje).toBe('Evento eliminado correctamente');
  });

  it('should display an error message if borrarEvento fails', () => {
    // Simula un error en el servicio
    mockEventoService.borrarEvento.and.returnValue(throwError(() => new Error('Error al eliminar')));
    
    // Llama al método borrarEvento
    component.borrarEvento();
    
    // Verifica que el mensaje de error se haya establecido correctamente
    expect(component.mensaje).toBe('Error al eliminar el evento');
  });
});

