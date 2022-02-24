import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Iduso } from 'src/app/models/iduso.model';
import { IdusoService } from 'src/app/services/iduso.service';



@Injectable({
  providedIn: 'root',
})
export class IdusoCadastroResolver implements Resolve<Iduso> {
  constructor(private service: IdusoService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Iduso> {
    return this.service.getById(route.params?.['id'], ['id', 'codigo', 'nome']);
  }
}
