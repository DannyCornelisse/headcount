import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './../interfaces/company';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies: Array<Company>;
  @Output() companyChange: EventEmitter<any> = new EventEmitter();

  private endpoint = '/api/companies/';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public addCompany(company: Company): Observable<Object> {
    const token = this.authService.getToken();
    return this.http.post(this.endpoint, company, { headers: { 'x-access-token': token } });
  }

  public getCompanies() {
    const token = this.authService.getToken();
    return this.http.get(this.endpoint, { headers: { 'x-access-token': token } })
      .pipe(
        map((res: any) => {
          this.companies = res;
          return this.companies;
        })
      );
  }

  public updateCompany(company: Company): Observable<any> {
    const token = this.authService.getToken();
    return this.http.put(
      `${this.endpoint}${company._id}`,
      company,
      { headers: { 'x-access-token': token } }
    )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  public deleteCompany(companyId: string) {
    const token = this.authService.getToken();
    return this.http.delete(`${this.endpoint}${companyId}`, { headers: { 'x-access-token': token } });
  }
}
