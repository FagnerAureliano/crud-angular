import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { IdusoService } from 'src/app/services/iduso.service';


@Injectable({
  providedIn: 'root',
})
export class IdusoConsultaResolver implements Resolve<User> {
  constructor(private service: IdusoService) {}
  resolve(): Observable<any> {
    return this.service.getAll();
  }
}
