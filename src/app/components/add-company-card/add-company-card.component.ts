import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyModalComponent } from './../add-company-modal/add-company-modal.component';

@Component({
  selector: 'app-add-company-card',
  templateUrl: './add-company-card.component.html',
  styleUrls: ['./add-company-card.component.scss']
})
export class AddCompanyCardComponent implements OnInit {
  @Output() companyChange: EventEmitter<any> = new EventEmitter();


  constructor(
    private modalService: NgbModal
  ) { }

  public openCompanyModal() {
    const modalRef = this.modalService.open(AddCompanyModalComponent);
    modalRef.result.then(() => {
      this.companyChange.emit('update companies');
    })
    .catch(() => {});
  }

  ngOnInit() {
  }

}
