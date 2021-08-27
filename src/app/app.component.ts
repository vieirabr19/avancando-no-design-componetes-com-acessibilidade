import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { fade } from './shared/animations/fade';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { ModalService } from './shared/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  firstName = 'Flávio';
  modalRef: ModalRef;
  info = false;
  form: FormGroup;

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['Flavio', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      info: [false]
    })
  }

  show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details'
    });
  }

  submit(): void {
    console.log(this.form.value);
    this.modalRef.close();
  }
}
