import { User } from './../../../../models/user.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { LoadingBarService, Role, UserService } from '@shared';

import { MenuItem } from 'primeng/api';
import { Paginator } from 'primeng/paginator';

import { Subscription } from 'rxjs';
import { Iduso } from 'src/app/models/iduso.model';
import { IdusoService } from 'src/app/services/iduso.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'plan-iduso-consulta-container',
  templateUrl: './iduso-consulta-container.component.html',
  styleUrls: ['./iduso-consulta-container.component.scss'],
})
export class IdusoConsultaContainerComponent implements OnInit, OnDestroy {
  private subs$: Subscription[] = [];

  _breadcrumbItems!: MenuItem[];
  _home!: MenuItem;

  filters!: Object;
  _fields = ['id', 'codigo', 'nome'];

  idusos: Iduso[] = [];
  pageableTotalIdusos!: number;
  pageablePageSize!: number;
  _isNewBtnDisabled = false;
  _currentPage = 0;

  @ViewChild('paginator', { static: false })
  paginator!: Paginator;

  constructor(
    private service: IdusoService,
    private route: ActivatedRoute,
    private router: Router,
    // private loading: LoadingBarService,
    // private userService: UserService
  ) {
    this.subs$.push(

      service.getAll().subscribe(
        (res: any[]) => this.idusos =res
      ),


      // this.route.data.subscribe((res:any) => {
      //   this.idusos = res
      //   // this.pageableTotalIdusos = res['data'].totalElements;
      //   // this.pageablePageSize = res['data'].size;
      // })
    );
  }
  ngOnDestroy(): void {
    this.subs$.forEach((subs) => subs.unsubscribe);
  }

  ngOnInit(): void {
    this._breadcrumbItems = [
      { label: 'Planejamento', disabled: true },
      { label: 'Facilitadores', disabled: true },
      { label: 'IDUSO'},
    ];

    this._home = {
      icon: 'pi pi-home',
      url: environment.SISPLAER_FRONT_URL,
    };

    // this._isNewBtnDisabled = !this.userService.user.roles.some(
    //   (role) => role === Role.CADASTRO_BASICO
    // );
  }

  handleBreadcrumbClick(e:any) {
    if (!e.item.icon) {
      this._breadcrumbItems[
        this._breadcrumbItems.indexOf(e.item)
      ].disabled = true;
    }
  }

  handleNewIduso() {
    this.router.navigate(['facilitadores/iduso/cadastro']);
  }

  // handleSearch(text: string, handleLoadingOf:any) {
  //   this.filters = { q: text };

  //   this.subs$.push(
  //     handleLoadingOf(
  //       this.service,
  //       'getAllPaginated',
  //       this._fields,
  //       this.filters,
  //       0
  //     ).subscribe((res:any) => {
  //       this.idusos = res.content;
  //       this.pageableTotalIdusos = res.totalElements;
  //       this.pageablePageSize = res.size;
  //       this._currentPage = 0;
  //       this.paginator.changePage(0);
  //     })
  //   );
  // }

  updateTable(page: number, isAction: boolean = false) {
    if (this._currentPage !== page || isAction) {
      // this.loading.start();
      this.subs$.push(
        this.service
          .getAll()
          .subscribe((res) => {
            this.idusos = res
            // this.pageableTotalIdusos = res.totalElements;
            // this.pageablePageSize = res.size;
            // this._currentPage = page;
            // this.loading.end();

            if (!isAction) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }
          })
      );
    }
  }
}
