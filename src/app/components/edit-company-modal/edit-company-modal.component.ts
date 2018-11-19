import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-company-modal',
  templateUrl: './edit-company-modal.component.html',
  styleUrls: ['./edit-company-modal.component.scss']
})
export class EditCompanyModalComponent implements OnInit {
  @Input() company: Company;

  constructor(
    private companyService: CompanyService,
    public activeModal: NgbActiveModal
  ) { }

  public companyCopy: Company = {
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

  editCompany() {
    return this.companyService
      .updateCompany(this.companyCopy)
      .subscribe(() => {
        return this.activeModal.close();
      });
  }

  deleteCompany(companyId) {
    return this.companyService
      .deleteCompany(companyId)
      .subscribe(
        () => this.activeModal.close(),
        err => console.log(err)
      );
  }

  ngOnInit() {
    this.companyCopy = JSON.parse(JSON.stringify(this.company));

    // if (!this.companyCopy.address) {
    //   this.companyCopy.address = {
    //     name: ''
    //   };
    // }
  }

}
