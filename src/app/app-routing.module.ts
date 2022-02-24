import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'facilitadores',
    pathMatch: 'full',
  },
  {
    path: 'facilitadores',
    loadChildren: () =>
      import('./modules/facilitadores/facilitadores.module').then(
        (m) => m.FacilitadoresModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
