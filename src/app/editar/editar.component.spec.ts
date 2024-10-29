import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { EventoService } from '../service/evento.service'; 

describe('EventoService', () => {
  let service: EventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [EventoService] 
    });
    service = TestBed.inject(EventoService); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});




