import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

interface ImageType {
  value: string;
  viewValue: string;
}

export class SelectImage {
  imageTypes: ImageType[] = [
    {value: 'Infra', viewValue: 'Infra'},
    {value: 'UI', viewValue: 'UI'}
  ];
}
@Component({
  selector: 'app-add-cdr',
  templateUrl: './add-cdr.component.html',
  styleUrls: ['./add-cdr.component.css']
})
export class AddCdrComponent implements OnInit {
  deliveryForm: FormGroup;
  @ViewChild('resetDeliveryForm', {static: true}) myNgForm;

  constructor(public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private cdrApi: ApiService) { }

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit(form: NgForm){
    console.log(form);
  }

  initializeForm() {
    this.deliveryForm = this.fb.group({
      service_name: ['', [Validators.required]],
      tag: ['', [Validators.required]],
      bugid: ['', [Validators.required]],
      submitter_id: ['', [Validators.required]],
      image_type: ['', [Validators.required]]
    })
  }

  submitDeliveryForm() {
    if (this.deliveryForm.valid) {
      this.cdrApi.AddCdr(this.deliveryForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/list-cdr'))
      });
    }
  }

}
