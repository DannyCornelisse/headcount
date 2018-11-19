import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCompanyModalComponent } from './../edit-company-modal/edit-company-modal.component';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company: Company;
  @Output() companyChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal
  ) { }

  editCompany(company: Company) {
    const modalRef = this.modalService.open(EditCompanyModalComponent);

    modalRef.componentInstance.company = company;
    modalRef.result
      .then(() => {
        this.companyChange.emit('update companies');
      })
      .catch(err => {});
  }

  ngOnInit() {
  }

}
