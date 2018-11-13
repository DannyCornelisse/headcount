import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-company-modal',
  templateUrl: './add-company-modal.component.html',
  styleUrls: ['./add-company-modal.component.scss']
})
export class AddCompanyModalComponent implements OnInit {
  newCompany: Company = {
    name: '',
    address: {
      streetName: '',
      city: '',
      number: null,
      annex: '',
      postalCode: ''
    },
    customerNumber: null
  };

  constructor(
    public activeModal: NgbActiveModal,
    public companyService: CompanyService
  ) { }

  public addCompany() {
    return this.companyService
      .addCompany(this.newCompany)
      .subscribe(res => {
        this.activeModal.close();
      });
  }

  ngOnInit() {
  }

}
