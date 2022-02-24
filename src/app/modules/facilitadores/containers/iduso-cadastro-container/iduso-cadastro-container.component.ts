import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

// import { LoadingBarService } from '@shared';

import { MenuItem, MessageService } from 'primeng/api';

import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iduso } from 'src/app/models/iduso.model';
import { User } from 'src/app/models/user.model';
import { IdusoService } from 'src/app/services/iduso.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'plan-iduso-cadastro-container',
  templateUrl: './iduso-cadastro-container.component.html',
  styleUrls: ['./iduso-cadastro-container.component.scss'],
})
export class IdusoCadastroContainerComponent implements OnInit, OnDestroy {
  subs$: Subscription[] = [];
  _breadcrumbItems!: MenuItem[];
  _home!: MenuItem;

  _isSubmitBtnDisabled = false;

  iduso!: Iduso;

  form!: FormGroup;

  constructor(
    private service: IdusoService,
    // private loading: LoadingBarService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.subs$.push(
      this.route.data.subscribe((res) => {
        this.iduso = res['data'];
      })
    );
  }

  ngOnDestroy(): void {
    this.subs$.forEach((subs) => subs.unsubscribe);
  }

  ngOnInit(): void {
    this._breadcrumbItems = [
      { label: 'Planejamento', disabled: true },
      { label: 'Facilitadores', disabled: true },
      {
        label: 'IDUSO',
        routerLink: '/facilitadores/iduso',
      },
      {
        label: this.iduso ? 'Edição de IDUSO' : 'Cadastro de IDUSO',
      },
    ];

    this._home = {
      icon: 'pi pi-home',
      url: environment.SISPLAER_FRONT_URL,
    };

    this.form = this.fb.group({
      codigo: [null, [Validators.required, Validators.maxLength(4)]],
      nome: [null, [Validators.required, Validators.maxLength(255)]],
    });

    if (this.iduso) {
      this.form.patchValue(this.iduso);
    }
  }

  handleBreadcrumbClick(e:any) {
    if (!e.item.icon) {
      this._breadcrumbItems[
        this._breadcrumbItems.indexOf(e.item)
      ].disabled = true;
    }
  }

  clearForm() {
    this.form.reset();
  }

  handleSubmit() {
    // this.loading.start();

    this._isSubmitBtnDisabled = true;

    const observableResolved = (res:any) => {
      // this.loading.end();
      this.messageService.add({
        severity: 'success',
        summary: 'Salvar IDUSO',
        detail: `${
          this.iduso ? 'IDUSO salvo com sucesso' : `IDUSO criado com sucesso`
        }`,
      });
      this.router.navigate(['/facilitadores/iduso']);
    };

    if (this.iduso) {
      this.subs$.push(
        this.service
          .update(this.route.snapshot.params['id'], this.form.value)
          .pipe(
            catchError((err) => {
              this._isSubmitBtnDisabled = false;
              return throwError(err);
            })
          )
          .subscribe((res) => {
            observableResolved(res);
          })
      );
    } else {
      this.subs$.push(
        this.service
          .create(this.form.value)
          .pipe(
            catchError((err) => {
              this._isSubmitBtnDisabled = false;
              return throwError(err);
            })
          )
          .subscribe((res) => {
            observableResolved(res);
          })
      );
    }
  }
}
