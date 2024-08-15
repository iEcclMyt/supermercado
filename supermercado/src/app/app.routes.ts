import { Routes } from '@angular/router';
import { NoencontradoComponent } from './Principal/noencontrado/noencontrado.component';
import { MenuComponent } from './Principal/menu/menu.component';
import { LecheComponent } from './Lácteos/leche/leche.component';
import { QuesosComponent } from './Lácteos/quesos/quesos.component';
import { VitrinaComponent } from './Lácteos/vitrina/vitrina.component';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'leche', component: LecheComponent },
  { path: 'quesos', component: QuesosComponent },
  { path: 'vitrina', component: VitrinaComponent },
  { path: '**', component: NoencontradoComponent }
];
