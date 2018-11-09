import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss']
})
export class CompanyPageComponent implements OnInit {

  constructor(
    private companyService: CompanyService
  ) { }
  companies: Array<Company>;

  fetchCompanies () {
    return this.companyService
      .getCompanies()
      .subscribe((companies: Array<Company>) => {
          this.companies = companies;
        },
        err => console.log(err)
      );
  }

  addCompany(company: Company) {
    this.companyService
      .addCompany(company)
      .subscribe(() => this.fetchCompanies());
  }


  ngOnInit() {
    this.fetchCompanies();
  }

}
