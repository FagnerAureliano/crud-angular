import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { BasePageable } from '../models/base-pageable.model';
import { Iduso } from '../models/iduso.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class IdusoService {
  private defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  // getAll(fields: string[] = [], filters: any = {}): Observable<Iduso[]> {
  //   const searchParams = new HttpParams({ fromObject: filters });
  //   return this.http.get<Iduso[]>(
  //     `${environment.SISPLAER_API}/idusos?fields=${fields.join(
  //       ','
  //     )}&${searchParams}`,
  //     { headers: this.defaultHeaders }
  //   );
  // }
  getAll(): Observable<User[]> {

    return this.http.get<User[]>(
      `${environment.SISPLAER_API}/users`
    );
  }

  getAllPaginated(
    fields: string[] = [],
    filters: any = {},
    page: number = 0
  ): Observable<BasePageable<Iduso>> {
    const searchParams = new HttpParams({ fromObject: filters });
    return this.http.get<BasePageable<Iduso>>(
      `${environment.SISPLAER_API}/idusos?sort=codigo&size=${
        environment.DEFAULT_PAGE_SIZE
      }&page=${page}&fields=${fields.join(',')}&${searchParams}&ispaged=true`,
      { headers: this.defaultHeaders }
    );
  }

  getById(id: number, fields: string[] = []): Observable<Iduso> {
    return this.http.get<Iduso>(
      `${environment.SISPLAER_API}/idusos/${id}?fields=${fields.join(',')}`,
      { headers: this.defaultHeaders }
    );
  }

  create(idusoObj: Object): Observable<Object> {
    return this.http.post<Object>(
      `${environment.SISPLAER_API}/idusos`,
      idusoObj,
      {
        headers: this.defaultHeaders,
      }
    );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.SISPLAER_API}/idusos/${id}`, {
      headers: this.defaultHeaders,
    });
  }

  update(id: number, idusoObj: Object): Observable<any> {
    return this.http.patch(
      `${environment.SISPLAER_API}/idusos/${id}`,
      idusoObj,
      {
        headers: this.defaultHeaders,
      }
    );
  }
}
