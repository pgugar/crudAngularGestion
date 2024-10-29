import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa el módulo de pruebas para HttpClient
import { EventoService } from './evento.service'; 

describe('EventoService', () => {
  let service: EventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule // Agrega el módulo de pruebas para HttpClient
      ],
      providers: [
        EventoService // Proporciona tu servicio
      ]
    });
    service = TestBed.inject(EventoService); // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se crea correctamente
  });

});

