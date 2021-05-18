import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './vistas/catalogo/catalogo.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CatalogoComponent, DetalleComponent, PerfilComponent];
