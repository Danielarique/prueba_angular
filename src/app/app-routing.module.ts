import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent},
  { path: 'detalles/:id', component: DetallesComponent},
  { path: '**', pathMatch:'full',redirectTo: 'productos'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
