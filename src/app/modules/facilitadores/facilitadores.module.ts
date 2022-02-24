import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { ClickOutsideModule, SearchboxModule } from '@shared';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KeyFilterModule } from 'primeng/keyfilter';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToolbarModule } from 'primeng/toolbar';
import { IdusoTabelaComponent } from './components/iduso-tabela/iduso-tabela.component';
import { IdusoCadastroContainerComponent } from './containers/iduso-cadastro-container/iduso-cadastro-container.component';
import { IdusoConsultaContainerComponent } from './containers/iduso-consulta-container/iduso-consulta-container.component';
import { FacilitadoresRoutingModule } from './facilitadores-routing.module';



@NgModule({
  declarations: [

    IdusoConsultaContainerComponent,
    IdusoTabelaComponent,
    IdusoCadastroContainerComponent,

  ],
  imports: [
    CommonModule,
    FacilitadoresRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BreadcrumbModule,
    TableModule,
    CardModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    DropdownModule,
    KeyFilterModule,
    PaginatorModule,
    MultiSelectModule,
    TabMenuModule,
    TabViewModule,
    ChipModule,
    MultiSelectModule,
    // SearchboxModule,
    // ClickOutsideModule,
    CheckboxModule,
  ],
})
export class FacilitadoresModule {}
