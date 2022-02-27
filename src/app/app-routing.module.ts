import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'header', 
    loadChildren: () =>import('./header/header.module').then(m=>m.HeaderModule)
  },
  {
     path: 'productos', 
    loadChildren: () =>import('./productos/productos.module').then(m=>m.ProductosModule)
  },
  {
     path: 'usuarios', 
    loadChildren: () =>import('./usuarios/usuarios.module').then(m=>m.UsuariosModule)
  },
  {
     path: 'ventas', 
    loadChildren: () =>import('./ventas/ventas.module').then(m=>m.VentasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
