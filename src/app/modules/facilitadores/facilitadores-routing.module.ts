import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdusoCadastroContainerComponent } from './containers/iduso-cadastro-container/iduso-cadastro-container.component';
import { IdusoConsultaContainerComponent } from './containers/iduso-consulta-container/iduso-consulta-container.component';
import { IdusoCadastroResolver } from './resolvers/iduso-cadastro.resolver';
import { IdusoConsultaResolver } from './resolvers/iduso-consulta.resolver';

// import { Role } from '@shared';

// import { AuthGuard } from '@auth';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'iduso',
    pathMatch: 'full',
  },
  {
    path: 'iduso',
    component: IdusoConsultaContainerComponent,
    resolve: { data: IdusoConsultaResolver },
  },
  {
    path: 'iduso',
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    // data: { roles: [Role.ADMIN, Role.CADASTRO_BASICO] },
    children: [
      {
        path: 'cadastro',
        component: IdusoCadastroContainerComponent,
      },
      {
        path: ':id',
        component: IdusoCadastroContainerComponent,
        resolve: { data: IdusoCadastroResolver },
      },
    ],
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacilitadoresRoutingModule {}
