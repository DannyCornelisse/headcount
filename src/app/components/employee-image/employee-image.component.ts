import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-image',
  templateUrl: './employee-image.component.html',
  styleUrls: ['./employee-image.component.scss']
})
export class EmployeeImageComponent implements OnInit {
  @Output() ImageData: any;

  constructor(
    private http: HttpClient
  ) { }

  setFiles(event) {
    if (event) {
      const file = event.srcElement.files[0];
      const formData: FormData = new FormData();
      formData.append('pic', file, file.name);
      this.ImageData = formData;
      this.http.post('/api/employee-images', this.ImageData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }).subscribe(
        res => console.log(res),
        err => {
          debugger;
        }
      )

    } else {
      console.log('Something went wrong');
    }
  }

  ngOnInit() {
  }

}
