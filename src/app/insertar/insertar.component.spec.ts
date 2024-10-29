import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Para pruebas de HttpClient
import { RouterTestingModule } from '@angular/router/testing'; // Para pruebas de rutas
import { FormsModule } from '@angular/forms'; // Importa FormsModule si usas formularios basados en plantillas
import { InsertarComponent } from './insertar.component';
import { EventoService } from '../service/evento.service'; 
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { of } from 'rxjs'; // Importa 'of' para crear un observable

describe('InsertarComponent', () => {
  let component: InsertarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, // Para pruebas de HttpClient
        RouterTestingModule, // Para pruebas de rutas
        FormsModule // Importa FormsModule para usar ngForm
      ],
      declarations: [
        InsertarComponent
      ],
      providers: [
        EventoService,
        { // Proporciona un valor simulado para ActivatedRoute
          provide: ActivatedRoute,
          useValue: { params: of({ id: '1' }) } // Simula el parámetro de la ruta
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InsertarComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy(); // Verifica que el componente se crea correctamente
  });
});


