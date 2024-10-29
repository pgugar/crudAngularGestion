import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])  // Incluye el RouterModule con rutas vacías
      ],
      declarations: [
        AppComponent  // Declara el componente que vamos a probar
      ],
    }).compileComponents();
  });

  // Verifica que el componente se crea correctamente
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();  // Verificamos que el componente se ha creado
  });

  // Verifica que el título esté correctamente establecido
  it(`should have as title 'gestion-eventos'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gestion-eventos');  // Verifica que el título es 'gestion-eventos'
  });

  // Verifica que el título se renderice correctamente en el HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  // Dispara la detección de cambios para que el HTML se renderice
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica que el contenido del <h1> contenga "CAPTICKETS"
    expect(compiled.querySelector('h1')?.textContent).toContain('CAPTICKETS');
  });
});


