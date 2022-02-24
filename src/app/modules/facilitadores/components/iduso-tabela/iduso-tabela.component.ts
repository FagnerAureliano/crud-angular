import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

// import { LoadingBarService, Role, UserService } from '@shared';

import { ConfirmationService, MessageService } from 'primeng/api';

import { Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Iduso } from 'src/app/models/iduso.model';
import { User } from 'src/app/models/user.model';
import { IdusoService } from 'src/app/services/iduso.service';


@Component({
  selector: 'plan-iduso-tabela',
  templateUrl: './iduso-tabela.component.html',
  styleUrls: ['./iduso-tabela.component.scss'],
})
export class IdusoTabelaComponent implements OnInit, OnDestroy {
  subs$: Subscription[] = [];

  _isActionBtnDisabled = false;

  @Input() data: Iduso[] = [];

  @Output() lancamentoDeleted = new EventEmitter<number>();

  constructor(
    private service: IdusoService,
    // private loading: LoadingBarService,
    // private confirmationService: ConfirmationService,
    // private messageService: MessageService,
    private router: Router,
    // private userService: UserService
  ) {}

  ngOnDestroy(): void {
    this.subs$.forEach((subs) => subs.unsubscribe);
  }
  ngOnInit(): void {
    // this._isActionBtnDisabled = !this.userService.user.roles.some(
    //   (role:any) => role === Role.CADASTRO_BASICO
    // );
  }

  handleDelete(event: Event, id: number) {
    // event.stopImmediatePropagation();

    // this._isActionBtnDisabled = true;

    // this.confirmationService.confirm({
    //   acceptLabel: 'Sim, deletar',
    //   rejectLabel: 'Cancelar',
    //   // target: event.target,
    //   message:
    //     'Após deletado, não será possível recuperar esse IDUSO. Tem certeza disso?',
    //   icon: 'pi pi-info-circle',
    //   accept: () => {
    //     // this.loading.start();

        this.subs$.push(
          this.service
            .delete(id)
            .pipe(
              catchError((err) => {
                this._isActionBtnDisabled = false;
                return throwError(err);
              })
            )
            .subscribe(() => {
              this._isActionBtnDisabled = false;
              // // this.messageService.add({
              //   severity: 'success',
              //   summary: 'Tudo OK',
              //   detail: 'IDUSO deletado com sucesso',
              // });
              this.lancamentoDeleted.emit();
            })
        );
        // this.loading.end();clear

      // },

      // reject: () => {
      //   this._isActionBtnDisabled = false;
      // },
    // });
  }

  handleEdit(id: number) {
    this.router.navigate([`facilitadores/iduso/${id}`]);
  }
}
